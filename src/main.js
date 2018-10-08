import React from 'react'
import ReactDOM from 'react-dom'
import ScrollPanel from './ScrollPanel'


class App extends React.Component{

    constructor(props){
        super(props)
        
    }

    componentDidMount() {


    }



    render(){

        return(
                <ScrollPanel value={this.props.num || 100}/>    
        )   
    }
}


ReactDOM.render(<App />, document.getElementById("root"))