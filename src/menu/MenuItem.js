import React from 'react';
import { Component, PropTypes } from '@Libs';
import { MenuContext } from './MenuContext';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }
    static contextType = MenuContext
    static propTypes = {
        /** 自定义样式 */
        className: PropTypes.string,
    }

    componentDidMount(){
        if(this.props.opened){
            this.context.defaultOpenActive(this.props.index);
        }
    }
    
    active(){
        const { activeIndex } = this.context;
        return this.props.index === activeIndex;
    }
    handleClick(){
        const { to } = this.props;
        const { onClick } = this.context;
        onClick(this, this.props.index, to)
    }
    render(){
        const { children, mode } = this.props;
        const isHorizontal = mode === 'horizontal';
        return (
            <li 
                style={this.style()}
                className={this.className('tv-menu-item', {
                    'tv-menu-horizontal': isHorizontal,
                    'tv-menu-active': this.active()
                })}
                onClick={this.handleClick.bind(this)}
            >
                {children}
            </li>
        )
    }
}