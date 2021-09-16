import React from 'react'
import Logo from './y18.gif';
import {Link} from "react-router-dom";

function Navbar() {
    return <div className="navvbar">

        
        <ul>
            <li><img src={Logo} className="logo" width="80%" alt="logo"></img></li>
            <li><p className="met"><h3>Hacker News</h3></p></li><br/>
           
            <li><p className="lo"><Link to='/login' className="menu" >new |</Link></p></li>
            <li><p className="lo"><Link to='/login' className="menu" >past |</Link></p></li>
            <li><p className="lo"><Link to='/login' className="menu" >comments |</Link></p></li>
            <li><p className="lo"><Link to='/login' className="menu" >ask |</Link></p></li>
            <li><p className="lo"><Link to='/login' className="menu" >show |</Link></p></li>
            <li><p className="lo"><Link to='/login' className="menu" >jobs |</Link></p></li>
            <li><p className="lo"><Link to='/login' className="menu" >submit </Link></p></li>
        <li><p className="log"><Link to='/login' className="menu" >login</Link></p></li>
        
        
        </ul>
       </div>
}

export default Navbar;