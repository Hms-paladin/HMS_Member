import React,{useEffect,useState} from 'react'
import { GetDietCompanyDetails } from '../../../actions/DietHistoryActions'
import Nurse from '../../../images/nurse.png'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useDispatch,connect} from 'react-redux'
import MealPlanModal from './MealPlanModal'
import { GetMealPlans } from '../../../actions/DietHistoryActions'
import {Modal} from 'antd'
import moment from 'moment'
import { Empty, Button } from 'antd';
function DietDetails(props){
    let dispatch=useDispatch()
    const [MealsPlan,setMealsPlan]=useState([])
    const [openmodal,setopenmodal]=React.useState(false) 
    const [FilterMealdata,setFilterMealdata]=useState([])
    const [vendorId,setvendorId]=useState("")
    const [empty,setEmpty]=useState(true)
    useEffect(()=>{
        dispatch(GetMealPlans(props.location.state.dietvendorId))
        setvendorId(props.location.state.dietvendorId)
    },[])
    useEffect(()=>{
        let MealsData=[]
        props.DietMealPlans[0]?.dietpackageDetails.map((data)=>{
            MealsData.push(data)
        })
        setMealsPlan(MealsData)
        if(props.DietMealPlans[0]?.dietpackageDetails.length>0){
            setEmpty(false)
        }
      },[props.DietMealPlans,empty])
    const OpenModal=(id)=>{
        var Package=MealsPlan.find((data)=>{
           return(
               data.dietpackageId==id
           )
        })
        setopenmodal(true)
        setFilterMealdata(Package)
    } 
    console.log("emoty",props)
    const profile=props.location.state
    const Working_hours=props.location.state.dietcompanyworkinghours
    return(
        <div>
        <div style={{height:"250px",width:"100%"}}>
        <img src={profile.vendor_filename} className="Pro_tra_img"/>
        </div>
        <Grid container className="parent_diet_dept">
        <Grid item xs={12} md={4}>
            <p className="h_d_plan">Working Hours</p>
            <div className="working_div">
            {Working_hours.map((data)=>
            <>
             <div>
                <p style={{fontWeight:"600"}}>{data.wh_weekday}</p>
                <p>{moment(data.wh_fromtime,"hh:mm A").format("hh:mm A")}-{moment(data.wh_totime,"hh:mm A").format("hh:mm A")}</p>
             </div>
             </>
             )}
           
             <div>
                <p style={{fontWeight:"600"}}>Address</p>
                <p>{profile.vendor_address}</p>
             </div>
             </div> 
        </Grid>   
        <Grid item xs={12} md={6} className="part_snd_mplans">
                    <div className="meal_plan_head">Meal Plans</div>
                    <div className={MealsPlan.lenght>4?"parent_change_div":"parent_div_mplan"} >
                     {empty?   
                     <div className="empty_div"> 
                    <Empty
                         image={Empty.PRESENTED_IMAGE_SIMPLE}
                         imageStyle={{
                           height: 60,
                         }}
                         description={
                           <span style={{fontSize:"17px",fontWeight:"700"}}>
                             No food session available to book
                           </span>
                         }
                       >
                    </Empty> 
                    </div>:
                    <>
                    {MealsPlan.map((data,index)=>
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
                     </>
                     }
                    </div>
                </Grid>
        
        </Grid>   
          <Modal
           visible={openmodal}
           onCancel={()=>setopenmodal(false)}
           footer={false}
           title={false}
           centered
           className="diet_planmodal"
           >
            
             <MealPlanModal CloseModal={()=>setopenmodal(false)} MealsPlan={FilterMealdata} DietCompany={props.DietMealPlans} DietVendorId={vendorId}/>
           </Modal>
        </div>
    )
}
const mapStateToProps=(state)=>({
    DietMealPlans:state.DietReducer.DietMealPlan
})
export default connect(mapStateToProps)(DietDetails);