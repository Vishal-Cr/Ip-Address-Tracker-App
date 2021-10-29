import React from 'react'
import{Card,Divider,Infodiv} from './card.style';
import spinner from '../Assets/images/Spinner.svg'; 
import './cardstyle.css'
const card = (props) => {
    const[loader,setLoader]=React.useState(false);
    const{ip,location,timezone,isp}=props.cardData;
    
    
    


    return (
        <Card className='card'>
        
       <Infodiv className="info">
            
                  <small>IP ADDRESS</small>
              
                <p>{!ip ? <img className='loading_spinner' src={spinner}/> : ip }</p>
            
                </Infodiv>
            
                <Divider/>
            
            <Infodiv className="info">
            
                <small>LOCATION</small>
            
                <p>{!location?<img className='loading_spinner' src={spinner}/>:location}</p>
               
              
            </Infodiv>
                <Divider/>

            <Infodiv className="info">
               
               

                <small>TIMEZONE</small>
                <p>{!timezone?<img  className='loading_spinner' src={spinner}/>:timezone}</p>
 
               
             
            </Infodiv>
                <Divider/>
            <Infodiv className="info">
           

                <small>ISP</small>
                  <p className='isp'>{!isp?<img className='loading_spinner' src={spinner}/>:isp}</p>
            
    
            </Infodiv>
                
        </Card>
    )
}

export default card
