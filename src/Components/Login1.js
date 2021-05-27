import React,{useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import {Form,Button} from 'react-bootstrap';
import Spinner from '../Impcomponents/Spinner.js';
import {useStateValue} from './Stateprovide';
import './Login1.css';
function Signup2() {
    let history=useHistory();
    const [,dispatch]=useStateValue();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[isloading,setIsloading]=useState(false);

    const setEmail1=(e)=>{
        setEmail(e.target.value);
        console.log(email);
    }
    const setPassword1=(e)=>{
        setPassword(e.target.value);
        console.log(password);
    }
    const handleLogin= async e =>{
         e.preventDefault();
         if(email==='' || email.length===0){
            toast.error('please enter valid email');  
           

         }
         else if(password==='' || password.length===0){
            toast.error('please enter valid password');
            
         }
         else{
             try{
                 setIsloading(true);
                 const response=await fetch('https://scityadmin.herokuapp.com/api/login',{
                     method:'POST',
                     headers:{
                         'Content-Type': 'application/json'
                     },
                     body:JSON.stringify({
                         email:email,
                         password:password
                     })
                 })
                 const responsedata=await response.json();
                 if(!response.ok){
                     throw new Error(responsedata.message)
                 }
                 setIsloading(false);
                 toast.success('You are successfully Loggedin');
                 dispatch({
                    type:'SETUSER',
                    user:email,
                    token:responsedata.token
                });
                history.push('/');
             }
             catch(err){
                 setIsloading(false);
                 toast.error('Something Went Wrong')
             }
         }  
    }
    return (
    <React.Fragment>
    <ToastContainer />
     
     {isloading && <Spinner asOverlay/> }
     {!isloading &&
    <div className="main-background1">
    <div className="background-style1">
    <div className="form-style1">
    <Form onSubmit={handleLogin} >
        <Form.Group controlId="formBasicPassword">
            <Form.Label className="tcolor">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={setEmail1}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label className="tcolor">Password</Form.Label>
            <Form.Control type="password" placeholder="password" onChange={setPassword1}  />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check className="tcolor" type="checkbox" label="Keep logged in" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
       </Form>
        </div>
        </div>
        </div>
     }
        </React.Fragment>
    )
}

export default Signup2
