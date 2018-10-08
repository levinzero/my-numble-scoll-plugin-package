import React from 'react'
import ReactDOM from 'react-dom'
import ScrollPanel from './ScrollPanel'


class App extends React.Component{


    render(){

        return(
            <ScrollPanel />
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"))