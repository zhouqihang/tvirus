import React from 'react';
import { Component, PropTypes } from '@Libs';
import Icon from '../icon'

export default class Button extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'warning']),
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
        className: PropTypes.string,
        shape: PropTypes.string,
        icon: PropTypes.string,
        block: PropTypes.bool,
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
        plain: PropTypes.bool,
    };
    
    static defaultProps = {
        type: 'default',
        htmlType: 'button',
    }

    render(){
        const { type, size, disabled, loading, plain, block, shape, icon, children, ...other } = this.props;
        return (
            <button 
            className={
                this.className('tv-button', 
                type && `tv-button-${type}`,
                size && `tv-button-${size}`,
                {
                    'tv-button-disabled': disabled,
                    'tv-button-loading': loading,
                    'tv-button-plain': plain,
                    'tv-button-block': block,
                    [`tv-button-${shape}`]: shape,
                }
                )
            } 
            style={this.style()}
            {...other}
            >
                { loading && <Icon type="loading" /> }
                { icon && !loading && <Icon type={icon} /> }
                <span>{children}</span>
            </button>
        )
    }
}
