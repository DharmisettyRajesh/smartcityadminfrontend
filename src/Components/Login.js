import React from 'react'
import './Login.css'
import Signup2 from './Login1.js';
function Signup() {
    const [signup,setSignup]=React.useState(false);
    const setSignup1=()=>{
            setSignup(!signup);
    }
    return (
        <div>
       {!signup && <div className="background1">
           <input className="input-style1" onClick={setSignup1} type="button" value="LOGIN" />
           
        </div>
        }
        {
               signup && <Signup2 />
           }
        </div>
    )
}

export default Signup
