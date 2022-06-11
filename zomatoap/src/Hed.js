import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

class Header extends Component {

    render(){
        return (
            <header>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle"
                        data-toggle="collapse" data-target="#myNav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                                <div id="logoo">
                                    <span>ZOMATO</span>
                                </div>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="nav navbar-nav default">
                            <li> <Link to="/" className="default">Home</Link></li>
                            <li><a href="#" className="default">About us</a></li>
                            <li><Link to="/Services" className="default">Contact</Link></li>
                            <li><a href="#" className="default">Login</a></li>
                        </ul>
                      
                    </div>
                   
                </div>
            </nav>
            </header>
        )
    }
    
}

export default Header;