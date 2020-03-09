import React from "react";
import { connect } from "react-redux";
import {get} from "../store/action"


class App extends React.Component{

    constructor(props){
     super(props)
     this.fire=this.fire.bind(this)
    }

    fire(){
        console.log(this.props);

       this.props.fetchUrl();
    }


    render(){
    

        return(
            <div>
                <h1>
                    ITS WORKING
                </h1>
                <button onClick={this.fire }>
                    Click ME
                </button>
            </div>
        )

    }





}

const mapDispatchToProps =(dispatch) =>(
    {
        fetchUrl: ()=> dispatch(get("https://jsonplaceholder.typicode.com/todos/1", null))
    }
)


export default connect(null, mapDispatchToProps)(App);