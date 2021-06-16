import React, { useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from  '@material-ui/core/Button'
import {Modal} from 'antd'
import {useDispatch,connect} from 'react-redux'
import {CategoryMealPlans,DietInstructions} from '../../../actions/DietHistoryActions'
import MenuListModal from './MenuListModal'
import {DietAddMealPlan} from '../../../actions/DietHistoryActions'
import './MealPlanModal.scss'
 function MealPlanModal(props){
    const Spice=[
        {items:"Spice"}, {items:"Medium Spice"}, {items:"Low Spice"}
    ]
    const [openmodal,setopenmodal]=React.useState(false)
    const [confirmTrue,setconfirmTrue] =useState(false)
    const OpenModal=()=>{
        setconfirmTrue(true)
        dispatch(DietAddMealPlan(props.DietVendorId,props.MealsPlan.dietpackageId,DietPlans))
        setopenmodal(true)
    } 
    const CloseModal=()=>{
        setopenmodal(false)
    }
    let dispatch=useDispatch()
    const [SaltList,setSaltList]=useState([])
    const [CategoryPlan,setCategoryPlan]=useState([])
    const [DietPlans,setDietPlans]=useState([])
    useEffect(()=>{
     dispatch(CategoryMealPlans())
     dispatch(DietInstructions())
    },[])
    // useEffect(()=>{
    //     if(confirmTrue){
    //     dispatch(DietAddMealPlan(props.DietVendorId,props.MealsPlan.dietpackageId,DietPlans))
    //     }
    //    },[])
    useEffect(()=>{
        let SaltData=[]
        let category=[]
        props.Category_MealPlan.map((data)=>{
            category.push(data) 
        })
        props.Diet_Instructions.map((data)=>{
            SaltData.push(data) 
        })
        setCategoryPlan(category)
        setSaltList(SaltData)
    },[props.Category_MealPlan,props.Diet_Instructions,DietPlans])
    const [change_clr,setchange_clr]=useState([])
    const CategoryPush=(id)=>{
        // setchange_clr()
        setDietPlans([...DietPlans,id]) 
       
    }

    console.log("props",props.DietAddMealPlan)



    return(
        <div>
          <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                  <div className="d_plan_overview">
                      <p className="d_head">{props.MealsPlan.diet_package_name}</p>
                      <p className="d_weeks">
                          {props.MealsPlan.diet_duration/7+" "+"Weeks"}
                      </p>
                      <p className="d_amt">{props.MealsPlan.diet_price+" "+"KWD"}</p>
                      {/* <p className="d_namehead">Vegetables and Legumes/beans</p> */}
                      <p className="d_names">{props.MealsPlan.diet_description}</p>
                      <div className="diet_btns">
                      <Button className="d_cancel" onClick={()=>props.CloseModal(false)}>Cancel</Button>
                      <Button className="d_confirm" onClick={OpenModal}>Confirm</Button>
                      </div>
                  </div>
              </Grid>  
              <Grid item xs={12} md={7} className="diet_filter"> 
                 <p className="fil_cat">Filter Category</p>
                 {CategoryPlan.map((data,index)=>
                
                 <label className={change_clr[index]?"filter_change_clr":"filter_dplans"} key={index} onClick={()=>CategoryPush(data.dietfiltercategoryId)}>{data.filter_category}</label>
                 )}
                 <p className="fil_cat">Instruction</p>
                 {SaltList.map((data,index)=>
                 <>
                 <label className="salt_dplans">{data.inst_category}</label>
                 <label className="salt_dplans">{data.instruction}</label>
                 </>
                 )}
                 {/* <div>
                  {Spice.map((data,index)=>
                 <label className="spice_dplans">{data.items}</label>
                 )}
                 </div> */}
              </Grid>  
          </Grid>
          <Modal
          visible={openmodal}
          onCancel={CloseModal}
          footer={false}
          title={false}
          centered
          className="meal_plan_modal"
          width={"lg"}
          >
           <MenuListModal MealList={props.DietAddMealPlan} DietPlan={props.DietAddMealPlan}/>
          </Modal>
        </div>
    )
}
const mapStateToProps=(state)=>({
    Category_MealPlan:state.DietReducer.CategoryMealPlan,
    Diet_Instructions:state.DietReducer.diet_Instructions,
    DietAddMealPlan:state.DietReducer.AddMealplan
})
export default connect(mapStateToProps)(MealPlanModal);