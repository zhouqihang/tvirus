import React from 'react'
import ReactDOM from 'react-dom'

import { Component, PropTypes, Portal, noop, Animation } from '@Libs';
import Dialog from './Dialog';

const iconMaps = {
    info: 'info_solid',
    success: 'success_solid',
    danger: 'error_solid',
    warning: 'warn_solid',
    loading: 'loading',
}

class Alert extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }
    static defaultProps = {
        onClose: noop
    }

    onShow(){
        const { onClose } = this.props;

        this.setState({
            visible: true,
        }, () => {
            onClose();
        });
    }

    onClose = () => {
        const { onClose } = this.props;
        this.setState({
            visible: false,
        }, () => {
            onClose();
        });
    }
    onOk = () => {
        const { onOk } = this.props;
        this.setState({
            visible: false,
        }, () => {
            onOk();
        });
    }
    render(){
        const { children, visible, onUpdateEnd, onClose, ...other } = this.props;
        return <Dialog type="alert" onClose={this.onClose} onOk={this.onOk} visible={this.state.visible} {...other}>{children}</Dialog>
    }
}

const reWrite = function (contentType, content, properties) {
    const { ...props } = properties || {};
    props.contentType = contentType;
    props.icon = iconMaps[contentType];
    let div;
    div = document.createElement('div');
    document.body.appendChild(div);
    return ReactDOM.render(<Alert {...props}>{ content }</Alert>, div);
};

export default {
    info: (content, options) => {
        return reWrite('info', content, options);
    },
    success: (content, options) => {
        return reWrite('success', content, options);
    },
    warning: (content, options) => {
        return reWrite('warning', content, options)
    },
    error: (content, options) => {
        return reWrite('danger', content, options)
    }
}
