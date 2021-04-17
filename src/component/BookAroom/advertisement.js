import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import {NavLink, useHistory, useLocation} from 'react-router-dom'
import Ad from '../../images/b_room.png'
export default function BookaRoom_ad(){
    const [close,setclose]=React.useState(true)
    const Closed=()=>{
        setclose(false)
    }
    let location=useLocation()
    let history=useHistory()
    useEffect(()=>{
      if(close===false){
          history.push("/hospitallist")
      }
    },[close])
    return(
        <div className="ad_parent">
               {close &&
               <div className="ad_child_div">
               <div className="ad_advertise_c">
                 <img src={Ad} className="c_ad_img"/> 
                
                 <div className="ad_phy_btn"><NavLink to="/hospitallist"><Button className="bk_ad_btn">Book Now</Button></NavLink></div>
                 

                 <div className="adver_close_div"><CloseIcon className="ad_icon" onClick={Closed}/></div>

              </div>
              </div>
         
}
        </div>
    )
}