import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';

function Page1() {
    let x = useHistory()
    console.log(x)
    return(
        <div>
            <div style ={{marginTop:'10%'}}>
             <Button onClick={()=>{x.push('/Services')} } size="lg">Commencer</Button>{' '}
            </div>
            
            <div style={{marginTop:'20%'}}>
           <Button disabeled >Abscent</Button>{'    '}
           <Button disabeled>Present</Button>{'    '}
           <Button disabeled>Excusé</Button>{'    '}

           </div>

        </div>
    
    ) 
   
}
export default Page1;