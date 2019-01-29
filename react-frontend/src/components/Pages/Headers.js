import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Landing from './Landing';
import SignInUi from './SignInUi';
class Headers extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <Route exact path="/" render={()=><Landing/> } />
                <Route exact path="/SignIn" render={()=><SignInUi updateState= {this.props.updateState}/> } />
            </div>
        )
    }
}
export default Headers