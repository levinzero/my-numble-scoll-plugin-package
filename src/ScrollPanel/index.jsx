import React, { Component } from 'react'
import _ from 'lodash'
import style from './index.less'
import ScrollNum from '../ScrollNum'
import {optionStyle} from '../main'

/*eslint-disable */
class ScrollPanel extends Component {
    render(){
        const { value } = this.props
        const digitArray = [
            parseInt(value / 100000, 0),
            parseInt((value % 100000) / 10000, 0),
            parseInt((value % 10000)/ 1000, 0),
            parseInt((value % 1000)/ 100, 0),
            parseInt((value % 100) / 10, 0),
            value % 10]
        const {Consumer} = optionStyle
        return (
          <div className={style.scrollPanel}>
            {
              digitArray.map((d, index)=>
                <Consumer key={index}>
                  {value => <ScrollNum  digit={d} initHeight = {parseInt(value.digitBox.height)}/>}
                </Consumer>
                
              )
            }
          </div>
        )
    }
}

export default ScrollPanel