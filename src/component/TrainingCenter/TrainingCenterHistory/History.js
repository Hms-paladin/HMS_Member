import  React from 'react'
import {Input} from 'antd'
import search from '../../../images/search.svg'
import sort from '../../../images/sort.svg'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import percentage from '../../../images/percentage.svg'
import StarIcon from '@material-ui/icons/Star';
import Tr_Image1 from '../../../images/tr_cat_image.png'
import LabImage2 from '../../../images/b_lab.jpeg'
import {NavLink,path,useHistory} from 'react-router-dom'
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'

// import './Lab_History.scss'
// import Map from './Map'
const { Search } = Input;
export default function Training_History(props){
    const [open,setClose]=React.useState(false)
    let history = useHistory();
    const[HideAdrs,setHideAdrs]=React.useState(false)
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    const Opened=()=>{
        setClose(!open)
    }
    const PushTrainingdetails=()=>{
      history.push("/Trainingdetails")
    }
    const Lab_history=[
        {
            id:1,
            labname:"Liverpool Club",
            address:"Adailia",
            off:10,
            rating:4.5,
            review:12,
            img:Tr_Image1,
        },
        {
            id:2,
            labname:"Real Madrid Club",
            address:"Shuwaikh",
            off:15,
            rating:4.7,
            review:121,
            re_per:93,
            img:LabImage2,
        }
    ]
    console.log(props.match.path,"lab")
    return(
        <div className="training_center_history">
           
    
                    {/* search part */}
                 <div className="lab_srch_parent">
                 <div className="lab_srch_div">
                   <div style={{position:"relative"}}><Input type="search " placeholder={"Search"} className="srch_his"/><img src={search} style={{position:"absolute",top:"7px",right:"17px"}}/>
                   <div className="sorts_div"><span style={{paddingRight:"10px"}}>Offer<img src={sort} className="lab_sort"/></span><span>Rating<img src={sort}className="lab_sort"/></span></div>
                   </div>  
                </div>  
                </div>
                
                {/* card items */}
                <div>
                <Grid container style={{paddingTop:"10px"}}>
                {Lab_history.map((data,index)=>   
          <Grid item xs={open?6:12} md={open?6:12}spacing={2} className={open?"paper_items_grid_change":"paper_items_grid"}>   
                <Paper className={open?"lab_his_item_pchange":"lab_his_item_p"}>    
                <div style={{display:"flex",width:"100%"}}>
                <div className="book_nurse_div" onClick={PushTrainingdetails}>  
                  <img src={data.img} className="lab_his_img"/>
                   <div className="lab_his__text_div">
                      <p className="lab_his_h_name">{data.labname}</p>
                      <div style={{display:"flex"}}>
                       {HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">{data.address}</label>}
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
                         <div className="per_inside_div"><p>{data.off+"%"}</p><p>off</p></div>
                      </div>
                      <div>
                       <span className="star_ic_div"><label>{data.rating}</label><StarIcon/></span>
                       <div style={{fontSize:"10px"}}>({data.review + "reviews"})</div>
                       
                      </div>
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
         <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
         </div>
         <div class="carousel-item">
         <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
         </div>
         <div class="carousel-item"> 
         <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>

         </div>
        </div>
        </div>
                </Paper>
                </Grid>)}

              

                </Grid>
                </div>
             
             
        </div>
    )
}