import React from 'react'
import Diet from '../../../images/diet1.png'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button'
import Labelbox from '../../../helpers/labelbox/labelbox'
import "./Diet_CreateReview.scss"
export default function Diet_CreateReview(props){
    const BookingDetails = [
        {
            id: 1,
            name: "Rose",
            date: "16 Apr 2021",
            history:"Cancelled",
        },
        {
            id: 2,
            name: "Rose",
            date: "17 Apr 2021",
            history:"Rescheduled",
        },
        {
            id: 3,
            name: "Rose",
            date: "19 Apr 2021",
           
        }
    ]
    return(
        <div>
           <label className="create_review">Review</label>
           {/* img part */}
           <div className="create_r_pro_div">
               <div className="create_r_pro_childdiv">
                   <div className="create_pro_imgdiv"><img src={Diet} className="create_r_pro"/>
                   <div className="nur_r_name">Healthy Eats</div></div>
               </div>
            </div>
            {/*Rating  */}
            <div className="rating_txt">Rating</div>
            <div  className="star_rateing">
            {[...Array(5)].map((img,index)=>(
            
              <div key={index}><StarIcon className="star_rating_icon"/></div>
            ))}
            </div>
          
                <Labelbox type="textarea" placeholder="write a review"/>
                <div style={{textAlign:"center"}}><Button className="sub_rev_butt" onClick={()=>props.ModalClickClose()}>Submit Review</Button></div>
        </div>
    )
}