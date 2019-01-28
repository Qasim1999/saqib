import React,{Component} from "react";
import {Link} from "react-router-dom";

class nav extends Component{

    render(){
        return (            
        <nav className="nav">
        
            <ul>
                <li className="li1">
                    <Link className="nav-link" to = "/">Sell With Us</Link>
                </li>

                <li className="li1">
                    <Link className="nav-link" to = "/about">Call Us</Link>
                </li>

                <li className="li1">
                    <Link className="nav-link" to = "/service">Download App </Link>
                </li>
       
       </ul>
       
       <input type="search" className="q"  placeholder="What are you looking for?" ></input>
       <i className="fas fa-search"></i>
       

            </nav>
        );
    }
}

export default nav;