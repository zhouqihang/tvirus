import React from 'react';
import { Component, PropTypes, noop } from '@Libs';

export default class Row extends Component {
    constructor(props) {
        super(props);


    }
    static propTypes = {
        /** 自定义样式 */
        className: PropTypes.string,
        onChange: PropTypes.func,

    };
    static defaultProps = {
    };
    render(){
        return (
            <div className={this.className('tv-table-row')}>
                {this.props.children}
            </div>
        )
    }
}
