import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from 'react-toastify';
import Spinner from '../Impcomponents/Spinner.js';
import {useHistory} from 'react-router-dom';

import {useStateValue} from './Stateprovide.js';
import './Signup2.css';
function Signup2() {
    const [,dispatch]=useStateValue();
    
    let history=useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isloading ,setIsloading]=useState(false);
    const [phno,setPhno]=useState();
    const setName1=(e)=>{
        setName(e.target.value);
    }
    const setEmail1=(e)=>{
        setEmail(e.target.value);
    }
    const setPassword1=(e)=>{
        setPassword(e.target.value);
    }
    const setPhno1=(e)=>{
        setPhno(e.target.value);
    }
    const handleSignup=async e=>{
        e.preventDefault();
        if(name===''||name.length===0){
            toast.error('please enter a name');
        }
        else if(email===''||email.length===0){
            toast.error('please enter a valid email');
        }
        else if(phno.length>10 || phno.length<9){
            toast.error('Please enter a valid phone Number');
        }
        else if(password===''||password.length===0){
            toast.error('please enter a password');
        }
        else{
            try{
            setIsloading(true);
            const response=await fetch('https://scityadmin.herokuapp.com/api/signup',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:name,
                    email:email,
                    phno:phno,
                    password:password
                })
            });
            const responsedata=await response.json();
            if(!response.ok){
                throw new Error(responsedata.message);
            }
            setIsloading(false);
            toast.success('Successfully Signed up');
            dispatch({
                type:'SETUSER',
                user:email,
                token:responsedata.token
            });
            history.push('/');
        }
        catch(error){
            setIsloading(false);
            toast.error(error.message||'Something Went wrong');
        }
        }
    }

    return (
    <React.Fragment>
    <ToastContainer />
    {isloading && <Spinner asOverlay />}
    {!isloading &&<div className="main-background">
    <div className="background-style">
    <div className="form-style">
    <Form onSubmit={handleSignup} >
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="tcolor">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"  onChange={setName1}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label className="tcolor">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={setEmail1} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label className="tcolor">Phone No</Form.Label>
            <Form.Control type="number" placeholder="Enter Phno" onChange={setPhno1} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label className="tcolor">Password</Form.Label>
            <Form.Control type="password" placeholder="password" onChange={setPassword1} />
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
        </div>}
        </React.Fragment>
    )
}

export default Signup2
