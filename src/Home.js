import React from 'react'
import Logo from './y18.gif';
import {Link} from "react-router-dom";
import Arrow from './arrow.gif'; 
function Home() {
    return <div className="navvbar">

        
    <ul>
        <li><img src={Logo} className="logo" width="80%" alt="logo"></img></li>
        <li><p className="met"><h3>Hacker News</h3></p></li><br/>
       
        <li><p className="lo"><Link to='/home' className="menu" >new |</Link></p></li>
        <li><p className="lo"><Link to='/home' className="menu" >past |</Link></p></li>
        <li><p className="lo"><Link to='/home' className="menu" >comments |</Link></p></li>
        <li><p className="lo"><Link to='/home' className="menu" >ask |</Link></p></li>
        <li><p className="lo"><Link to='/home' className="menu" >show |</Link></p></li>
        <li><p className="lo"><Link to='/home' className="menu" >jobs |</Link></p></li>
        <li><p className="lo"><Link to='/submit' className="menu" >submit </Link></p></li>
    <li><p className="log"><Link to='/login' className="menu" >login</Link></p></li>
    
    
    </ul>
    <table className="main" bgcolor="#f6f6ef" border="0" cellpadding="0" cellspacing="0" width="100%" >
        <tbody className="kl">
           <div className="li"> <tr><td>1. <a href="login"><img src={Arrow} alt="arrow"  className="arrow"/></a>Show HN: Display a bell emoji on HN comments you haven't read yet <a href="https://gist.github.com/linkdd/76fd57d02480c3e36a4e3f8ce39322b1" className="lin">(gist.github.com)</a></td></tr></div>
            <div className="linkk"><tr><td>67 points by <a href="https://news.ycombinator.com/user?id=jasonlaster11" className="lin">jasonlaster11</a> 1 hour | hide | 16 comments</td></tr></div>
            <div className="li"> <tr><td>2. <a href="login"><img src={Arrow} alt="arrow"  className="arrow"/></a>Turing Oversold <a href="https://people.idsia.ch//~juergen/turing-oversold.html" className="lin">(idsia.ch)</a></td></tr></div>
            <div className="linkk"><tr><td>227 points by <a href="https://news.ycombinator.com/user?id=anielsen" className="lin">anielsen</a> 7 hour | hide | 148 comments</td></tr></div>
            <div className="li"> <tr><td>3. <a href="login"><img src={Arrow} alt="arrow"  className="arrow"/></a>Show HN: Time Travel Debugger<a href="https://people.idsia.ch//~juergen/turing-oversold.html" className="lin">(idsia.ch)</a></td></tr></div>
            <div className="linkk"><tr><td>61 points by <a href="https://news.ycombinator.com/user?id=anielsen" className="lin">anielsen</a> 1 hour | hide | 50 comments</td></tr></div>
        </tbody>
    </table>
   </div>
       
}

export default Home;