import React  from 'react';
import Icon_Location from '../Assets/images/icon-location.svg';
import ReactMapGl,{Marker} from 'react-map-gl';
import './MapStyle.css';

const map = (props) => {
    
    const{latitude,longitude}=props.mapView;
    
   
    const [viewport,setViewport]=React.useState({
      latitude:latitude,
      longitude:longitude,
      zoom:10,
      width:'100vw',
      height:'90vh'
    });

    return (
        <>
 
 <ReactMapGl {...viewport} 
 mapboxApiAccessToken={import.meta.env.VITE_MAP_TOKEN}
 mapStyle="mapbox://styles/mapbox/streets-v11"
 
 className='map_container'
  onViewportChange={viewport=>{
   setViewport(viewport)
 }}
 >
<Marker 
latitude={latitude}
longitude={longitude}

>

  <img src={Icon_Location} className='map_pointer' alt="map-Pointer" />


</Marker>
 
 </ReactMapGl> 
 
          
 <button className='top' >
  <a href="#app-id">
    Goto Top
  </a>
</button>
        </> 
       
    )
   
}

export default map
