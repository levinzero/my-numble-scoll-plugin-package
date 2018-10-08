import React from 'react'
import ReactDOM from 'react-dom'
import ScrollPanel from './ScrollPanel'


export const optionStyle = React.createContext({digitBox:{}, fontStyle:{}, digitScroll:{}})

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState((prev) => {
                return {
                    num: prev.num + 1
                }
            })
        }, 1000)

    }

    NumChangeEnd() {

    }



    render(){
        const {Provider} = optionStyle
        return(
            <Provider value={this.props.optionStyle || {digitBox:{height:"30px"}, fontStyle:{}, digitScroll:{}}}>
               <ScrollPanel value={this.state.num} />
            </Provider>      
        )   
    }
}



ReactDOM.render(<App optionStyle={{digitBox:{height:"50px", width:"50px", background: "#000"}, fontStyle:{}, digitScroll:{}}}/>, document.getElementById("root"))