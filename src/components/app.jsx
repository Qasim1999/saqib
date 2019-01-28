import React,{Component} from "react";
import {Route} from "react-router-dom";

import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Service from "./service";
import Profile from "./profile";
import Contact from "./contact";


class App extends Component{
    // arr = [{name:'shahid', age :25 , email : '@gmail.com'},{name:'ali', age :20 , email : '@gmail.com'},{name:'zohan', age :18 , email : '@gmail.com'}];
    
    // onClickHandler = e =>{
    //     console.log("our function is running");
    // };

    render(){
        //     var response = this.arr.map(obj =>{
        //     return (
        //             <ul key={obj.age}>    
        //                 <li>{obj.name}</li>
        //                 <li>{obj.age}</li>
        //                 <li>{obj.email}</li>
        //             </ul>
        //     );
        // });

        return (            
        <div className="app">
             {/* <div onClick={this.onClickHandler}>Hello</div>
             <div>
                 <ul>{response}</ul>
             </div> */}


            <Nav/>
            <Route exact path ="/"  component = {Home}/>
            <Route path ="/about"   component = {About}/>
            <Route path ="/service" component = {Service}/>
            <Route path ="/contact" component = {Contact}/>
            <Route path ="/profile"    component = {Profile}/>
            
    
        </div>
        );
    }
}
export default App;









