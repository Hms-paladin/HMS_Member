import React from 'react'
import DietImage from '../../../images/Diet_b.png'
import StarIcon from '@material-ui/icons/Star';
import './MenuListModal.scss'
export default function MenuListModal(props){
    return(
        <div>
            <div>
                <div style={{display:"flex"}} className="menu_list_details">
                    <div>
                       <div>
                      <div><img src={DietImage}/></div>
                      <div>

                        <p>Helthy Eats</p>
                        <p>fghj</p>
                        <div>
                        {[...Array(5)].map((img,index)=>(
                      <StarIcon className="star_lab_icon"/> 
                      ))}  
                       </div>
                       </div>

                       </div> 
                    </div>
                    <div>
                        <p>Keto Diet</p>
                        <p>4weeks</p>
                        <p>200 KWD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
