import  React from 'react'
import {Input} from 'antd'
import search from '../../../images/search.svg'
import sort from '../../../images/sort.svg'
import Thumb from '../../../images/thumb.svg'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import percentage from '../../../images/percentage.svg'
import StarIcon from '@material-ui/icons/Star';
import LabImage from '../../../images/lab_clinic.png'
import LabImage2 from '../../../images/b_lab.jpeg'
import {NavLink,path} from 'react-router-dom'
import { Col, Row, Form, FormGroup} from 'reactstrap';
import ReactPlayer from 'react-player'
import './Lab_History.scss'
import Map from './Map'
const { Search } = Input;
export default function Lab_History(props){
    const [open,setClose]=React.useState(false)
    const[HideAdrs,setHideAdrs]=React.useState(false)
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    const Opened=()=>{
        setClose(!open)
    }
    const Lab_history=[
        {
            id:1,
            labname:"Best Clinical Lab",
            off:10,
            rating:4.5,
            review:12,
            re_per:85,
            img:LabImage,
        },
        // {
        //     id:2,
        //     labname:"YIACO Medical Center",
        //     off:15,
        //     rating:4.7,
        //     review:16,
        //     re_per:93,
        //     img:LabImage2,
        // }
    ]
    console.log(props.match.path,"lab")
    return(
        <div>
           
    
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
                <div className="book_nurse_div">  
                  <img src={data.img} className="lab_his_img"/>
                   <div className="lab_his__text_div">
                      <p className="lab_his_h_name">{data.labname}</p>
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
                         <div className="per_inside_div"><p>{data.off+"%"}</p><p>off</p></div>
                      </div>
                      <div>
                       <span className="star_ic_div"><label>{data.rating}</label><StarIcon/></span>
                       {/* {open? */}
                       <div className="star_open_ic" onClick={(index)=>Opened(data.index)}>Open</div>
                       
                       {/* <div className="star_close_ic" onClick={(index)=>Opened(data.index)}>Closed</div> */}
                      </div>
                   </div>
                   </div>
                   <div className="reviews_div"><img src={Thumb} style={{width:"20px"}}/><label className="lab_r_per">{data.re_per+"%"}</label><label className="re_per">({data.review + "reviews"})</label></div>  
                   {/* description in lab */}
                   <div className="lab_descrip">
                   <div id="carouselExampleIndicators" class="carousel slide">
            <ol class="carousel-indicators descrip">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
         <div class="carousel-inner">
        
         <div class="carousel-item active">
                    <label>Dalal</label>
                       <div>
                           Lab is clean.Home pick up sample service is really fine.On time service.
                       </div>
         </div>
           <div class="carousel-item">
                  <label>Dalal</label>
                       <div>
                           Lab is clean.Home pick up sample service is really fine.On time service.
                       </div>
            </div>
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
           <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=qDgRdzuWt58' />
         </div>
         <div class="carousel-item">
           <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=124t9bcW6ms' />
         </div>
         <div class="carousel-item">
           <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=c7HS3dBV3SI' />
         </div>
        </div>
        </div>
                </Paper>
                </Grid>)}

                {/* form and mapping part */}
                
                {open?
                      <Grid item xs={open?6:12} md={open?6:12} className={open?"paper_items_grid_change":"paper_items_grid"}>
                          <Paper className={open?"lab_his_item_pchange":"lab_his_item_p"}>
                          <Form className="lab_formitems">
                              <Row form>
                                 <Col md={5} sm={5}>
                                  <FormGroup>
                                  <p className="mem_con_namehead">Working Hours</p>
                                  <p className="mem_con_name">Monday-Thursday</p> 
                                  <p className="mem_con_name">09:00AM-10:00PM</p> 
                                 </FormGroup>
                                  </Col>
                                  <Col md={5} sm={5}>
                                  <FormGroup>
                                  <p className="mem_con_namehead">Phone:</p>
                                  <p className="mem_con_name">+965 00456785</p> 
                                 </FormGroup>
                                  </Col>
                                  <Col md={5} sm={5}>
                                  <FormGroup>
                                  <p className="mem_con_namehead">Email  ID:</p>
                                  <p className="mem_con_name">info.bestclinicallab.com</p>
                                 </FormGroup>
                                  </Col>
                                  <Col md={7} sm={7}>
                                  <FormGroup>
                                  <p className="mem_con_namehead">Address</p>
                                  <div className="mem_con_parentdiv">
                                  <div>{HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">Jabriya</label>}
                                   <span className="elipse" onClick={ElipseOpen}>...</span></div>
                                   <div><NavLink to="/clinicallab"><Button className="select_lab_butt">Select</Button></NavLink></div>
                                   </div>
                                 </FormGroup>
                                 </Col>
                                 {/* <Col md={2} sm={2} className="select_lab">
                                  <FormGroup>
                                 
                                   <Button className="select_lab_butt">Select</Button>
                                 </FormGroup>
                                  </Col> */}
                               </Row>   
                           </Form>  
                           <div><Map/></div>                       
                          </Paper>
                        
                      </Grid>
               :null}

                </Grid>
                </div>
             
             
        </div>
    )
}