import React from 'react'
import Diet1 from '../../../images/diet1.png'
import percentage from '../../../images/percentage.svg'
import StarIcon from '@material-ui/icons/Star';
import Thumb from '../../../images/thumb.svg'
import ReactPlayer from 'react-player'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {Input,Modal} from 'antd'
import search from '../../../images/search.svg'
import MealPlanModal from './MealPlanModal'
import './Diet_history.scss'
const { Search } = Input;
export default function Diet_History(){
    const [HideAdrs,setHideAdrs]=React.useState(false)
    const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    const Dietplans=[
        {
            id:1,
            dietname:"Keto Diet",
            amt:200,
            items:"Vegetables and Legumes/beans",
            itemsname:"Brocolli,Cabbages,Cauliflower,ollives,Spinach,Cucumber"
        },
        {
            id:2,
            dietname:"Paloe Diet",
            amt:180,
            items:"Meals",
            itemsname:"Apples,Banana,Trout,Salmon,Eggs"
        },
        {
            id:3,
            dietname:"Fiber Diet",
            amt:120,
            items:"Vegetables and Legumes/beans",
            itemsname:"Sweet potatoes,Avaocodo,Apples,Pears"
        },
        {
            id:4,
            dietname:"Keto Diet",
            amt:200,
            items:"Vegetables and Legumes/beans",
            itemsname:"Brocolli,Cabbages,Cauliflower,ollives,Spinach,Cucumber"
        },
    ]
    const [openmodal,setopenmodal]=React.useState(false) 
    const OpenModal=()=>{
        setopenmodal(true)
    } 
    const CloseModal=()=>{
        setopenmodal(false)
    }
    return(
        <div> 
            {/* search  */}
                  <div className="diet_srch_parent">
                  <div className="lab_srch_div">
                      <div style={{position:"relative"}}><Input type="search " placeholder={"Search"} className="srch_his"/><img src={search} style={{position:"absolute",top:"7px",right:"17px"}}/></div>
                   </div> 
                   </div> 
           <div className="diet_his_parent">
           <Grid container style={{paddingTop:"10px"}}>
                 
                <Grid item xs={12} md={6}>   
                  
                <div style={{display:"flex",width:"100%"}}>
                <div className="book_nurse_div">  
                  <img src={Diet1} className="lab_his_img"/>
                   <div className="lab_his__text_div">
                      <p className="lab_his_h_name">Healthy Eats</p>
                      <div style={{display:"flex"}}>
                       {HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">Jabriya</label>}
                       <span className="elipse" onClick={ElipseOpen}>...</span></div> 
                       {/* star icons */}
                       <div className="star_ra_div">
                       {[...Array(5)].map((img,index)=>(
                      <div key={index} ><StarIcon className="star_lab_icon"/></div> 
                      ))}  
                      </div>
                  </div>
                  </div>
                    {/* Percentage part */}
                    <div className="per_lab_part">
                      <div style={{position:"relative"}}>
                         <img src={percentage} style={{width:"55px"}}/>
                         <div className="per_inside_div"><p>10%</p><p>off</p></div>
                      </div>
                      <div>
                       <span className="star_ic_div"><label>4.5</label><StarIcon/></span>
                      </div>
                   </div>
                   </div>
                   <div className="reviews_div"><img src={Thumb} style={{width:"20px"}}/><label className="lab_r_per">95%</label><label className="re_per">(19 reviews)</label></div>  
                   {/* description in Diet */}
                   <div className="lab_descrip">
                  
                    <label>Dalal</label>
                       <div>
                           Keto diet gives me a very nice variety of unique and very delicious foods to try and eat.
                       </div>
                    </div>
          
                  

                   {/* Vedio */}
                   <div id="carouselExampleIndicators" class="carousel slide" >
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
         <div class="carousel-inner">
         <div class="carousel-item active">
           <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=pS7qTxVXQgw' />
         </div>
         <div class="carousel-item">
           <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=05DpAV5M_Lk' />
         </div>
         <div class="carousel-item">
           <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=t4t1Vj5-NLQ' />
         </div>
        </div>
        </div>
            
                </Grid>
                {/* Meal plans */}
                <Grid item xs={12} md={6} className="part_snd_mplans">
                    <div className="meal_plan_head">Meal Plans</div>
                    <div className="parent_div_mplan">
                    {Dietplans.map((data,index)=>
                    <Paper className="parent_meals_paper" onClick={OpenModal}>
                        <div className="meal_names_div">
                           <div><p>{data.dietname}</p>
                           <p className="d_week_txt">4 Weeks</p>
                           <p>{data.amt+"KWD"}</p></div>
                        </div>
                        <div className="meal_name_snddiv">
                           <div><p className="m_head_n">{data.items}</p>
                           <p className="m_veraty_names">{data.itemsname}</p></div>
                        </div>
                    </Paper>
                    )}
                    </div>
                </Grid>
                </Grid>

           </div>
           <Modal
           visible={openmodal}
           onCancel={CloseModal}
           footer={false}
           title={false}
           centered
           className="diet_planmodal"
           >
             <MealPlanModal CloseModal={CloseModal}/>
           </Modal>
       </div>
    )
}