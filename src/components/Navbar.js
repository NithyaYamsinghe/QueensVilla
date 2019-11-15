import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default class  extends Component {

    state={
        isOpen:false

    }

    handleToggle = () =>{

        this.setState({isOpen:!this.state.isOpen});


    }


  render() {
    return (
      <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">

            {/* Link to the logo */}
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>

             {/* Toggle button which displays in smaller screen */}
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                <FaAlignRight className="nav-icon"/>
            </button>
            {/* When toggle button open show list items other wise close */}
            </div>
                <ul className={this.state.isOpen? "nav-links show-nav": "nav-links"}> 
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/rooms">
                            Rooms
                        </Link>

                    </li>

                </ul>
          </div>
        </nav>
       
     
    )
  }
}
