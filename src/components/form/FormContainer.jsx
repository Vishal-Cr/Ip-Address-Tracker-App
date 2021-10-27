import {React,useState} from 'react'
import axios from 'axios';

import{StyledInput,Div,PointerDiv,Button} from './formContainer.style.js';
import arrowIcon from '../Assets/images/icon-arrow.svg';


const FormContainer = (props) => {
  const{ipId}=props
  
    const[ipInput,setIpInput]=useState('');
    const[ipFormData,setIpFormData]=useState({
      ipAddress:'' ,
      ipLocation:'' ,
      ipTimezone:'',
      ipIsp:'' 
    });
    const submitHandler=(e)=>{
       e.preventDefault();
      
       getAddress(ipInput);
    
      setIpInput('');
    }
   
   async function getAddress(query){
     
 const address=await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_TOKEN}&domain=${query}`)
 try{

   
   const{ip,location,isp}=address['data'];
   const{timezone}=location;
  
  props.formHandler({ip,location,timezone,isp});
   console.log(ip,location,timezone,isp);
  }
  catch(e){
console.log(e);
  }

   }
    return (
        <>
    
     
          <form onSubmit={submitHandler}>
       <Div className='input-container'>

       <StyledInput 
       type="text"    
         placeholder='Search for any IP address or domain' 
           
         value={ipInput} 
         
         onChange={(e)=>setIpInput(e.target.value)}
        onFocus={(event) => event.target.select()} 
          autoFocus/>
         
        <Button type='submit'>
      
          <PointerDiv className="image-div">
          
          <img src={arrowIcon} alt=""  />
     
          </PointerDiv>
      
        </Button>
             
              </Div>
       
       </form> 
       {/* <div>
       
        <Card cardData={dataHandler(ipData)}/>
       </div> */}
        </>
    )
}

export default FormContainer
