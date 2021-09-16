import React from 'react'

function Forget() {
    return <div>
        <h3>Reset your password</h3>
        <table border="0">
           <tbody><tr><td>username:</td>
           <td><input type="text" name="acct" size={20} autocorrect="off" spellcheck={false} autocapitalize="off" autofocus={true}/>
               </td></tr></tbody></table><br/>
               <input type="submit" value="Send reset email"/>
        </div>
}

export default Forget;