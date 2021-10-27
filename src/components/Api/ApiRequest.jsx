import {React,useState,useEffect} from 'react'
import axios from 'axios';
import FormContainer from '../form/FormContainer';


const ApiRequest = ({IpAddress}) => {
    const[ipAddress,setIpAddress]=useState('');
    if(IpAddress){
        setIpAddress(()=>IpAddress);
        const data= axios(address)
        .then((response)=>console.log(response))
        .catch((e)=>console.log(e));
    }
const[address,setAddress] =useState(`https://geo.ipify.org/api/v1?apiKey=${import.meta.env.VITE_TOKEN}`);   
   

   
      

   
    return (
        <>
           
        </>
    )
}

export default ApiRequest
