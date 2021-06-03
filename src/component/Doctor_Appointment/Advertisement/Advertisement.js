import React, { useEffect } from 'react'
import Ad_Diet from '../../../images/ad_diet.png'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import Truck from '../../../images/truck.svg'
import GradeIcon from '@material-ui/icons/Grade';
import {NavLink, useHistory, useLocation} from 'react-router-dom'
import './Advertisement.scss'
import Ad from '../../../images/doc_ad.png'
import Square from '../../../images/add_square.svg'
export default function AdvertisementDiet(){
    const [close,setclose]=React.useState(true)
    const Closed=()=>{
        setclose(false)
    }
    let location=useLocation()
    let history=useHistory()
    useEffect(()=>{
      if(close===false){
          history.push("/feed")
      }
    },[close])
    return(
        <div className="ad_parent">
               {close &&
               <div className="ad_child_div">
               <div className="ad_advertise_c">
                 <img src={Ad} className="c_ad_img"/> 
                
                 <div className="ad_doc_btn"><NavLink to="/feed"><Button className="bk_ad_btn">Book Now</Button></NavLink></div>
                 

                 <div className="adver_close_div"><CloseIcon className="ad_icon" onClick={Closed}/></div>

              </div>
              </div>
         
}
        </div>
    )
}