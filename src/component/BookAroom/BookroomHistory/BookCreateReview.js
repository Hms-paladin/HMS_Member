import React from 'react'
import Hospital from '../../../images/BookaRoom/room_img.png';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button'
import Labelbox from '../../../helpers/labelbox/labelbox'
import "./BookCreateReview.css";

export default function CreateReview(props){
   
    return(
        <div>
           <label className="create_review_head"> Review</label>
           {/* img part */}
           <div className="create_r_pro_div">
               <div className="create_r_pro_childdiv">
                   <div className="create_pro_imgdiv"><img src={props.BookingList.vendorProfileImage} className="create_r_pro"/>
                   <div className="nur_r_name">{props.BookingList.roomVendorName}</div></div>
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