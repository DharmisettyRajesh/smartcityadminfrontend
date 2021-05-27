import React from 'react'
import './Signup.css'
import Signup2 from './Signup2.js';
function Signup() {
    const [signup,setSignup]=React.useState(false);
    const setSignup1=()=>{
            setSignup(!signup);
    }
    return (
        <div>
       {!signup && <div className="background">
           <input className="input-style" onClick={setSignup1} type="button" value="SIGNUP" />
           
        </div>
        }
        {
               signup && <Signup2 />
           }
        </div>
    )
}

export default Signup
