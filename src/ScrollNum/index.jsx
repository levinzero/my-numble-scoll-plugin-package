import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import ClassNames from 'classnames'
import { Motion, spring } from 'react-motion'
import style from './index.less'
import { optionStyle } from '../main'


class ScrollNum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animationStart: false,
            items: [],
            scrollHeight: 0,
        }
    }

    componentWillMount() {
        const { digit } = this.props
        this.setState({
            items: [digit],
        })
    }

    componentDidMount() {
        const { digit } = this.props
        // setTimeout(()=>{
        //   this.setState({
        //     // animationStart: true,
        //     initDigit: 0,
        //     targetDigit: digit,
        //   })
        // },500)
    }

    /*eslint-disable */
    componentWillReceiveProps(props) {
        const { digit } = props
        const nowDidgit = this.props.digit
        if (digit == nowDidgit) {
            return
        }
        const scrollData = this.prepareItems(digit)
        this.setState({
            animationStart: false,
            items: scrollData.items,
            scrollHeight: scrollData.scrollHeight,
        })

        setTimeout(() => {
            this.setState({
                animationStart: true,
            })
        }, 300)
    }

    prepareItems(digit) {
        const initDigit = this.props.digit
        const { initHeight } = this.props
        const targetDigit = digit
        let dif = targetDigit - initDigit
        if (targetDigit === initDigit) {
            dif = 10
        }

        if (dif < 0) {
            dif = 10 + dif
        }
        const items = new Array(Math.abs(dif) + 1)
        const nValue = initDigit
        for (let i = 0; i < items.length; i++) {
            items[i] = dif > 0 ? (nValue + i) : (nValue)
            // if (items[i] < 0) { items[i] += 10 }

            if (items[i] > 9) { items[i] -= 10 }
        }

        return { items, scrollHeight: initHeight * (dif) }
    }



    render() {
        const { animationStart, items, scrollHeight } = this.state
        // const { initDigit, targetDigit } = this.state
        // console.log(items)
        const { Consumer } = optionStyle

        return (
            <Motion style={{ y: animationStart ? spring(scrollHeight) : 0 }}>
                {
                    ({ y }) => (
                        <Consumer>
                            {value => {
                                ("WebkitTransform" in value.digitScroll) && delete value.digitScroll["WebkitTransform"]
                                ("transform" in value.digitScroll) && delete value.digitScroll["transform"]          
                                return (
                                    <div
                                        className={style.digitBox}
                                        style={value.digitBox ? value.digitBox : {}}
                                    >
                                        <div
                                            className={style.digitScroll}
                                            style={{
                                                WebkitTransform: `translate3d(0, -${y}px, 0)`,
                                                transform: `translate3d(0, -${y}px, 0)`,
                                                ...value.digitScroll
                                            }}
                                        >
                                            {items.map((item, index) => <div key={index} style={{
                                                lineHeight: value.digitBox.height,
                                                height: value.digitBox.height,
                                                ...value.fontStyle
                                            }}>{item}</div>)}
                                        </div>
                                    </div>
                                )
                            }}
                        </Consumer>
                    )}
            </Motion>
        )
    }
    /*eslint-enabled */
}

ScrollNum.propTypes = {
    digit: PropsTypes.number,

}

ScrollNum.defaultProps = {
    digit: 0,
}

export default ScrollNum
