import React, { useRef, useEffect, useState } from 'react';
import Icon_Location from '../Assets/images/icon-location.svg';
import ReactMapGl,{Marker} from 'react-map-gl';


const map = (props) => {
    const{latitude,longitude}=props.mapCords

    console.log(latitude,longitude)
    const [viewport,setViewport]=useState({
       latitude:latitude,
       longitude:longitude,
        zoom:10,
   width:'100vw',
   height:'100vh'
    });
    return (
        <>
 
 <ReactMapGl {...viewport} 
 mapboxApiAccessToken={import.meta.env.VITE_MAP_TOKEN}
 mapStyle="mapbox://styles/mapbox/streets-v11"
  style={{position:'relative',top:'-7rem',zIndex:'-1'}}
 onViewportChange={viewport=>{
   setViewport(viewport)
 }}
 >
<Marker 
latitude={latitude}
longitude={longitude}
>
<div>
  <img src={Icon_Location} style={{width:'1.5rem',height:'1.5rem'}} alt="" />
  </div>

</Marker>
 
 </ReactMapGl> 
 
            
        </> 
       
    )
   
}

export default map
