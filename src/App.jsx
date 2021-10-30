import * as React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './App.css'
import Map from './components/Map/map';
import Form from './components/form/FormContainer';
import Card from './components/Stats-display-card/Card';
import Spinner from './components/Assets/images/Spinner.svg';

 function App() {
  let address=`
  
https://geo.ipify.org/api/v1?apiKey=${import.meta.env.VITE_TOKEN}`;
  
  const[ipData,setIpData]=React.useState({
    ip:'' ,
    location:'' ,
    timezone:'',
    isp:'' 
  });
  

const [mapViewport,setMapViewport]=React.useState({
  latitude:'',
  longitude:'',
 
});
  React.useEffect(() => {
        
       async function fetchMyApi(){

      const dataFetch= await axios.get(address)
      .then((response)=>{

     
      const{ip,location,timezone,isp}=response.data;
      
     
      
      setIpData({
        ip:ip,
        location:location['city']+','+location['region'],
        timezone:location['timezone'],
        isp:isp
      })
     
      setMapViewport({
        latitude:location['lat'],
        longitude:location['lng'],
      
      })
     
     }
   )
.catch((e)=>console.log(e));
     }
  fetchMyApi()
  
}, []);



 



   

const inputSubmitHandler=(inputValue)=>{

  const{ip,location,timezone,isp}=inputValue;
 
  setIpData({ip:ip,location:location['region']+','+location['city']+','+location['country'],timezone:location['timezone'],isp:isp});
  setMapViewport({
    latitude:location['lat'],
    longitude:location['lng'],
  
  })
}


  return (
    <div className="App" >

<h1 className='heading' id="app-id">IP Address Tracker</h1>


<Form  ipId={ipData['ip']} formHandler={inputSubmitHandler}/>

<Card cardData={ipData}/>



<div style={{width:'50vw',height:'50vh',color:'#333'}}>


{ !mapViewport['latitude']  ? <img src={Spinner} alt="" /> : <Map  mapView={mapViewport}/>   }

</div>




  
     
    </div>
  )
}

export default App
