import React,{useState,useEffect} from 'react'
import Diet1 from '../../../images/diet1.png'
import percentage from '../../../images/percentage.svg'
import StarIcon from '@material-ui/icons/Star';
import Thumb from '../../../images/thumb.svg'
import ReactPlayer from 'react-player'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {Input,Modal} from 'antd'
import searchImage from '../../../images/search.svg'
import MealPlanModal from './MealPlanModal'
import './Diet_history.scss'
import {dispatch,connect, useDispatch} from 'react-redux'
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'
import SliderComp from '../../../helpers/Slider/Slider'
import {GetDietCompanyDetails,GetMealPlans} from '../../../actions/DietHistoryActions'
const { Search } = Input;
 function Diet_History(props){
    const [HideAdrs,setHideAdrs]=React.useState(false)
    let dispatch=useDispatch()
    const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    const [openmodal,setopenmodal]=React.useState(false) 
    const [DietCompanyData,setDietCompanyData]=useState([])
    const [searchValue,setsearchValue]=useState("")
    const [search,setsearch]=useState(false)
    const [MealsPlan,setMealsPlan]=useState([])
    const [FilterMealdata,setFilterMealdata]=useState([])
    const OpenModal=(id)=>{
        var Package=MealsPlan.find((data)=>{
           return(
               data.dietpackageId==id
           )
        })
        setopenmodal(true)
        setFilterMealdata(Package)
    } 
    const CloseModal=()=>{
        setopenmodal(false)
    }
    useEffect(()=>{
      dispatch(GetDietCompanyDetails(searchValue,search))
      dispatch(GetMealPlans(DietCompanyData.vendorId))
    },[DietCompanyData.vendorId])
 
    useEffect(()=>{
        props.DietCompanyList[0]?.details.map((data)=>{
            setDietCompanyData({
                company_name:data.dietcompanyname,
                address:data.vendor_address,
                profile:data.vendor_profile_path,
                contact:data.vendor_contact,
                vendorId:data.dietvendorId
            })
        })
      },[props.DietCompanyList])
      useEffect(()=>{
          let MealsData=[]
        props.DietMealPlans[0]?.dietpackageDetails.map((data)=>{
            MealsData.push(data)  
        })
        setMealsPlan(MealsData)
      },[props.DietMealPlans])
    const OnSearch=(e)=>{
        setsearchValue(e.target.value)
        setsearch(true)
    }
    console.log("props",)
    const SubmitSearchData=()=>{
        if(search){
        dispatch(GetDietCompanyDetails(searchValue,search))
        }
    }
    return(
        <div> 
            {/* search  */}
                  <div className="diet_srch_parent">
                  <div className="lab_srch_div">
                      <div style={{position:"relative"}}><Input type="search " placeholder={"Search"} className="srch_his" onChange={OnSearch} value={searchValue}/><img src={searchImage} style={{position:"absolute",top:"7px",right:"17px"}} onClick={SubmitSearchData}/></div>
                   </div> 
                   </div> 
           <div className="diet_his_parent">
           <Grid container style={{paddingTop:"10px"}}>
                 
                <Grid item xs={12} md={6}>   
                  
                <div style={{display:"flex",width:"100%"}}>
                <div className="book_nurse_div">  
                  <img src={DietCompanyData.profile} className="lab_his_img"/>
                   <div className="lab_his__text_div">
                      <p className="lab_his_h_name">{DietCompanyData.company_name}</p>
                      <div style={{display:"flex"}}>
                       {HideAdrs?
                       <label className="lab_adrs">{DietCompanyData.contact+","+DietCompanyData.address}</label>
                       :<label className="lab_adrs">{DietCompanyData.contact}</label>}
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
                         <div className="per_inside_diet_div"><p>10%</p><p>off</p></div>
                      </div>
                      <div>
                       <span className="star_ic_div"><label>4.5</label><StarIcon/></span>
                      </div>
                   </div>
                   </div>
                   <div className="reviews_div"><img src={Thumb} style={{width:"20px"}}/><label className="lab_r_per">95%</label><label className="re_per">(19 reviews)</label></div>  
                   {/* description in Diet */}
                   <div className="lab_descrip">
                   <SliderComp>
           
               {[...Array(5)].map((img,index)=>(
                   <div>
                    <label>Dalal</label>
                       <div>
                           Keto diet gives me a very nice variety of unique and very delicious foods to try and eat.
                       </div>
                    </div>   
                ))}
               </SliderComp>
                    </div>
          
                  

                   {/* Vedio */}
                   <div>
                   <div id="#carouselExampleIndicators" class="carousel slide" data-interval="false">
            <ol class="carousel-indicators">
            {props.DietCompanyList[0]?.details[0]?.dietmediaDetails.map((data,index)=>{
                return(
              <li data-target="#carouselExampleIndicators" data-slide-to={index} class="active"></li>
            )})}
            </ol>
         <div class="carousel-inner"

         >
        {props.DietCompanyList[0]?.details[0]?.dietmediaDetails.map((data,index)=>{
            {console.log("checked",data.media_type==="Video")}
            return(
         <div 
         key={index}
        //  active={index === 0}
         class='carousel item active'
        //  data-interval='8000'
         >
         {data.media_type==="Video"?<VedioPlayer src={data.media_filename} playing poster={"/assets/poster.png"}/>:
        data.Image==="Image"?<img src={data.media_filename}/>:""}
         </div>
        )})}
        </div>
        </div>
        </div>
            
                </Grid>
                {/* Meal plans */}
                <Grid item xs={12} md={6} className="part_snd_mplans">
                    <div className="meal_plan_head">Meal Plans</div>
                    <div className={MealsPlan.lenght>4?"parent_change_div":"parent_div_mplan"} >
                    {MealsPlan&&MealsPlan.map((data,index)=>
                    <Paper className="parent_meals_paper" onClick={()=>OpenModal(data.dietpackageId)}>
                        <div className="meal_names_div">
                           <div style={{textAlign:"center"}}><p>{data.diet_package_name}</p>
                           <p className="d_week_txt">{data.diet_duration+" "+"Days"}</p>
                           <p>{data.diet_price+" "+"KWD"}</p></div>
                        </div>
                        <div className="meal_name_snddiv">
                           <div>
                               {/* <p className="m_head_n">{data.items}</p> */}
                           <p className="m_veraty_names">{data.diet_description}</p></div>
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
            
             <MealPlanModal CloseModal={CloseModal} MealsPlan={FilterMealdata}/>
           </Modal>
       </div>
    )
}
 const mapStateToProps=(state)=>({
     DietCompanyList:state.DietReducer.DietCompanyList,
     DietMealPlans:state.DietReducer.DietMealPlan
 })
 export default connect(mapStateToProps)(Diet_History);