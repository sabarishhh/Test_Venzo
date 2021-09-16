import React from 'react'

function Login() {
    return <div>


       <h3>login</h3>
       <table border="0">
           <tbody><tr><td>username:</td>
           <td><input type="text" name="acct" size={20} autocorrect="off" spellcheck={false} autocapitalize="off" autofocus={true}/>
               </td></tr>
           <tr><td>password:</td>
           <td><input type="password" name="pw" size={20}/></td></tr>
           </tbody>
           </table><br/>
           <input type="submit" value="login"/>
           <br/><br/>
           <a href="Forget" >Forgot your password?</a>
           <br/>
           <h3>Create Account</h3>
       <table border="0">
           <tbody><tr><td>username:</td>
           <td><input type="text" name="acct" size={20} autocorrect="off" spellcheck={false} autocapitalize="off" autofocus={true}/>
               </td></tr>
           <tr><td>password:</td>
           <td><input type="password" name="pw" size={20} /></td></tr>
           </tbody>
           </table><br/>
           <input type="submit" value="Create Account"/>
      </div>
       
  
   
}

export default Login;