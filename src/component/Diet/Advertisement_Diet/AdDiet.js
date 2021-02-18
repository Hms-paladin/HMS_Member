import React from 'react'
import Ad_Diet from '../../../images/ad_diet.png'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import Truck from '../../../images/truck.svg'
import GradeIcon from '@material-ui/icons/Grade';
import './AdDiet.scss'
export default function AdvertisementDiet(){
    const [close,setclose]=React.useState(true)
    const Closed=()=>{
        setclose(false)
    }
    return(
        <div>
               {close?
                <div className="diet_parent_div">
               <img src={Ad_Diet} className="diet_ad_img"/>
              
               
               <div className="ad_diet_cont">
                   <div className="per_d">10%</div>
                   <div className="off_d">Offer</div>
                   <div className="off_d">Book for months</div>
                   <div className="diet_n_meal"><p className="meal_n">4</p><p className="meal_cnt">Meal<br/>/Day</p></div>
                   <div><Button className="bk_diet_btn">Book Now</Button></div>
               </div>
                <div className="ad_close_div"><CloseIcon className="ad_icon" onClick={Closed}/></div>
                <div className="cndt_apply">
                    <div>
                        <img src={Truck} style={{width:"100px"}}/>
                        <label className="apply_home">Free Home Delivery</label>
                    </div>
                    <div><GradeIcon/><label className="cndt_apply_time">Conditions Apply</label></div>
                    <span><GradeIcon/><label className="cndt_apply_time">Offer  Valid till 31 Apr 2021</label></span>
                </div>
               </div>  
    :null}
        </div>
    )
}