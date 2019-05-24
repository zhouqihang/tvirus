import React, { Component } from 'react';
import Layout from '../../../common/compLayout';

import { Select, Row, Col } from 'tvirus';
import './index.less'

export default class SelectDemo extends Component{
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
                    <Row>
                        <Col span={12}>
                            <Select>
                                <Select.Option value="113">内容1</Select.Option>
                                <Select.Option value="223">内容2</Select.Option>
                            </Select>
                        </Col>
                        <Col span={12}>
                            <Select multiple={true}>
                                <Select.Option value="113">内容1</Select.Option>
                                <Select.Option value="223">内容2</Select.Option>
                            </Select>
                        </Col>
                    </Row>
                    
                </div>
            )
        });
        childs.push({
            title: '禁用',
            children: (
                <div className="code-demo">
                    <Row>
                        <Col span={12}>
                            <Select disabled>
                                <Select.Option value="113">内容1</Select.Option>
                                <Select.Option value="223">内容2</Select.Option>
                            </Select>
                        </Col>
                        <Col span={12}>
                            <Select multiple={true}>
                                <Select.Option value="113" disabled>内容1</Select.Option>
                                <Select.Option value="223">内容2</Select.Option>
                            </Select>
                        </Col>
                    </Row>
                    
                </div>
            )
        });
        
        childs.push({
            title: '带搜索',
            children: (
                <div className="code-demo">
                    <Row>
                        <Col span={12}>
                            <Select showSearch extra={<div className="select-logout">退出</div>}>
                                <Select.Option value="may" selected>may</Select.Option>
                                <Select.Option value="amy">amy</Select.Option>
                                <Select.Option value="ming">ming</Select.Option>
                            </Select>
                        </Col>
                        <Col span={12}>
                            
                        </Col>
                    </Row>
                    
                </div>
            )
        });

        this.setState({childs})
    }

    render() {
        const {childs} = this.state;

        return <Layout {...this.props} 
            className="main-select-box"
            title="Select"
            desc="选择列表（通常称为下拉菜单）允许用户从列表中选择一个选项或多个选项，为用户在选项的数量上提供了更多的灵活性。当选项多于 5 项时使用；列表选项按照逻辑排序，并尽量让内容显示完整。"
            childs={childs}
        />
    }
}
            