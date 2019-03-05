const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const execSync = require('child_process').execSync
const glob = require('glob')

function fsExistsSync(path) {
    try{
        fs.accessSync(path, fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}

function firstToUpperCase(str){
    const arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

class CreateSiteTempComp{
    constructor(options){
        this.opts = {
            output: options.output
        }
        this.siteTempComp = path.resolve(this.opts.output, `components`);
        this.siteTempLibs = path.resolve(this.opts.output, `libs`);
        this.compoents = this.getDirs();

    }
    getDirs(){
        const files = glob.sync('../src/**');
        const arr = [];
        files.forEach((file)=>{
            let dir = path.dirname(file);
            dir = dir.replace(/\.\.(\/src\/?)?/, '')
            if(!dir){
                return;
            }
            arr.push(dir);
        })
        return Array.from(new Set(arr));
    }
    copy(){
        execSync(`mkdir -p ${this.siteTempComp}`);
        this.compoents.forEach((item) => {
            execSync(`cd ${this.siteTempComp} && cp -rf ../../src/${item} ${this.siteTempComp}/${item}`);
            execSync(`rm -rf ${this.siteTempLibs} && cp -rf ../libs ${this.opts.output}`);

        });
    }
    mkdir(){
        const newCompoents = this.compoents.filter((compoent) => {
            const arr = compoent.split('/');
            if(arr.length > 1){
                return false;
            }
            const pagePath = `./client/pages/component/${compoent}/index.js`
            return !fsExistsSync(pagePath);
        });

        console.log('[CreateNewComp]', newCompoents);

        if(!newCompoents.length){
            return;
        }
        newCompoents.forEach((comp) => {
            const dirpath = `./client/pages/component/${comp}`;
            execSync(`mkdir -p ${dirpath}`);
            const name = firstToUpperCase(comp)
            fs.writeFileSync(`${dirpath}/index.js`, `
import React, { Component } from 'react';
import Layout from '../../../common/compLayout';

import ${name} from '@${comp}';
import './index.less'

export default class ${name}Demo extends Component{
    constructor(props){
        super(props);
        this.state = {
            childs: []
        }
    }

    componentWillMount(){
        this.childs();
    }

    childs(){
        const childs = [];
        childs.push({
            title: '正常',
            children: (
                <div className="code-demo">
                    <${name}></${name}>
                </div>
            )
        });

        this.setState({childs})
    }

    render() {
        const {childs} = this.state;

        return <Layout {...this.props} 
            className="main-${comp}-box"
            title="${name}"
            desc="${name}的说明"
            childs={childs}
        />
    }
}
            `)
            fs.writeFileSync(`${dirpath}/index.less`, `.main-${comp}-box{}`);
        })
    }
    remove(){
        execSync(`rm -rf ${this.siteTempComp}`);
    }
    apply(compiler) {
        compiler.plugin("entryOption",  (compilation, callback) => {
            this.remove()
            this.copy();
            this.mkdir();
            // callback();
        });
    }
}
const tvirus = {};

function getCompoents(){
    const files = glob.sync('../src/**');
    const arr = [];
    files.forEach((file)=>{
        let dir = path.dirname(file);
        dir = dir.replace(/\.\.(\/src\/?)?/, '')
        if(!dir){
            return;
        }
        arr.push(path.resolve(`./components/`, dir));
        tvirus[`@${dir}`] = path.resolve(`./components/`, dir);
    })
    return Array.from(new Set(arr));
}

getCompoents();

module.exports = {
    entry: {
        app: './client/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        clientLogLevel: 'info',
        open: false
    },
    resolve: {
        extensions: [".js", ".json", ".less"],
        alias: Object.assign({
            '@Libs': `../../libs`
        }, tvirus)
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, './components/icon/svg/'),
                ],
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: 'icon-[name]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },

                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },

                    {
                        loader: 'less-loader' // compiles Less to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new CreateSiteTempComp({
            output: __dirname
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'T-virus',
            filename: 'index.html',
            template: './client/template/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};