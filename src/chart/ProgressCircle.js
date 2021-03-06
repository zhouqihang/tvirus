import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '@Libs';
/**
 * 绘制圆环，支持渐变
 */
export default class ProgressCircle extends Component {
    static propTypes = {
        /** 自定义样式 */
        className: PropTypes.string,
        /** 圆环中间的数值后缀 */
        suffix: PropTypes.string,
        /** 渐变开始的颜色，如果startColor=endColor，则为纯色 */
        startColor: PropTypes.string,
        /** 渐变结束的颜色，如果startColor=endColor，则为纯色 */
        endColor: PropTypes.string,
        /** 圆环的弧度，以及显示的数值 */
        value: PropTypes.number,
        /** 圆环的背景环的颜色 */
        backgroundColor: PropTypes.string,
        /** 半径 */
        radius: PropTypes.number,
        /** 宽度 */
        width: PropTypes.number,
        /** 高度 */
        height: PropTypes.number,
        /** 圆环的粗细 */
        borderWidth: PropTypes.number,
    };

    static defaultProps = {
        width: 240, 
        height: 240,
        borderWidth: 4,
        backgroundColor: '#F2F4F7',
        radius: 90,
        suffix: '%'
    };

    constructor(props) {
        super(props);
        this.circleFront = null;
    }
    componentDidMount(){
        const circleFront = this.circleFront;
        const strokeDashoffset = this.calcDashOffset();
        requestAnimationFrame(()=>{
            circleFront.style.strokeDashoffset = strokeDashoffset;
        })
    }
    calcDashOffset() {
        let { radius, value } = this.props;
        
        const circumference = (Math.PI * (2 * radius));
        return Math.floor(circumference - ((value / 100) * circumference));
    }

    render() {
        const { width, height, value, suffix, startColor, endColor, backgroundColor, borderWidth } = this.props;

        return (
            <div className={this.className('tv-progress-circle')} style={{width,height}}>
                <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" className="tv-progress-circle-svg">
                    <circle className="tv-progress-circle-backgroud" r="90" cy={width/2} cx={height/2} strokeWidth={borderWidth-1} stroke={backgroundColor} fill="none" />
                    <circle ref={el => this.circleFront = el} className="tv-progress-circle-front" r="90" cy={width/2} cx={height/2} strokeWidth={borderWidth} stroke="url(#tvPurple)"strokeLinejoin="round" strokeLinecap="round" fill="none" />

                    <defs>
                        <linearGradient id="tvPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={endColor} />
                            <stop offset="100%" stopColor={startColor} />
                        </linearGradient>
                    </defs>

                </svg>
                <div className="tv-progress-circle-number">
                    <span className="tv-progress-circle-number-wraper">
                        <span className="tv-progress-circle-value">{ value }</span>
                        <span className="tv-progress-circle-suffix">{ suffix }</span>
                    </span>
                </div>
            </div>
        );
    }
}