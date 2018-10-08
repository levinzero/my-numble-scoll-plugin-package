import React, { Component } from 'react'
import _ from 'lodash'
import style from './index.less'
import ScrollNum from '../ScrollNum'

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
        return (
          <div className={style.scrollPanel}>
            {
              digitArray.map((d, index)=>
                <ScrollNum key={index} digit={d} />
              )
            }
          </div>
        )
    }
}

export default ScrollPanel