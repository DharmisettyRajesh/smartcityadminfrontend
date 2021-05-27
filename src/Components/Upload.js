import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from 'react-toastify';
import Spinner from '../Impcomponents/Spinner.js';
import './Upload.css';
function Upload() {
    const history =useHistory();
    const [city,setCity]=useState('');
    const [electricity,setElectricity]=useState('');
    const [power,setPower]=useState('');
    const [water,setWater]=useState('');
    const [transport,setTransport]=useState('');
    const [education,setEducation]=useState('');
    const [hospitals,setHospitals]=useState('');
    const [isloading,setIsloading]=useState(false);
    const setCity1=(e)=>{
        setCity(e.target.value);
    }
    const setElectricity1=(e)=>{
        setElectricity(e.target.value);
    }
    const setPower1=(e)=>{
        setPower(e.target.value);
    }
    const setWater1=(e)=>{
        setWater(e.target.value);
    }
    const setTransport1=(e)=>{
        setTransport(e.target.value);
    }
    const setEducation1=e=>{
        setEducation(e.target.value);
    }
    const setHospitals1=e=>{
        setHospitals(e.target.value);
    }
    const handleUpload=async(e)=>{
        e.preventDefault();
        if(city.length===0){
            toast.error('plaese enter city name');
        }
        else if(electricity.length===0)
        {
            toast.error('plaese enter Electricity details');
        }
        else if (power.length===0)
        {
            toast.error('please enter power details');
        }
        else if (water.length===0)
        {
            toast.error('please enter water details');
        }
        else if(transport.length===0)
        {
            toast.error('please enter transport details');
        }
        else if(education.length===0)
        {
            toast.error('please provide education details');
        }
        else if(hospitals.length===0)
        { 
            toast.error('please provide hospitals details');
        }
        else{
            try{
                setIsloading(true);
                const response=await fetch('https://scityadmin.herokuapp.com/api/upload',{
                    method:'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        City:city,
                        Electricity:electricity,
                        Power:power,
                        Water:water,
                        Transportation:transport,
                        Education:education,
                        Hospitals:hospitals
                    })
                });
                const responsedata =await response.json();
                if(!response.ok){
                    throw new Error(responsedata.message)
                }
                toast.success(responsedata.message);
                setIsloading(false);
              
               
            }
            catch(error){
                setIsloading(false);
                toast.error(error.message||'Smething went wrong');
            }
        }
    }

    return (
        <React.Fragment>
         <ToastContainer />
         {isloading && <Spinner asOverlay />}
         {!isloading &&
         <div className="outer-style">
             <div className="inner-style">
         <Form onSubmit={handleUpload} >
         <Form.Group controlId="formBasicEmail">
             <Form.Label className="tcolor">City</Form.Label>
             <Form.Control type="text" placeholder="Enter City Name"  onChange={setCity1}/>
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
             <Form.Label className="tcolor">Electricity</Form.Label>
             <Form.Control type="text" placeholder="Enter Electricity details" onChange={setElectricity1} />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
             <Form.Label className="tcolor">Power</Form.Label>
             <Form.Control type="text" placeholder="Enter Power details" onChange={setPower1} />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
             <Form.Label className="tcolor">Water</Form.Label>
             <Form.Control type="text" placeholder="Enter water details" onChange={setWater1} />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
             <Form.Label className="tcolor">Transport</Form.Label>
             <Form.Control type="text" placeholder="Enter Trasport details" onChange={setTransport1} />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
             <Form.Label className="tcolor">Education</Form.Label>
             <Form.Control type="text" placeholder="Enter Education details" onChange={setEducation1} />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
             <Form.Label className="tcolor">Hospitals</Form.Label>
             <Form.Control type="text" placeholder="Enter Hospital details" onChange={setHospitals1} />
         </Form.Group>
         <Button variant="primary" type="submit">
             Submit
         </Button>
        </Form>
        </div>
        </div>
         }
        </React.Fragment>
    )
}

export default Upload;
