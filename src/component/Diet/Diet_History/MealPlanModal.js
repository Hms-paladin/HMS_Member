import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from  '@material-ui/core/Button'
import {Modal} from 'antd'
import {NavLink} from 'react-router-dom'
import MenuListModal from './MenuListModal'
import './MealPlanModal.scss'
export default function MealPlanModal(props){
    const Mealplan=[
        {items:"Non Vegeterian"}, {items:"High Protein"}, {items:"Vegeterian"}, {items:"Vegan"},
        {items:"Diabetes"}, {items:"Sea food"}, {items:"Gluten free"}
    ]
    const Salt=[
        {items:"Salt"}, {items:"No Salt"}, {items:"Low Salt"}
    ]
    const Spice=[
        {items:"Spice"}, {items:"Medium Spice"}, {items:"Low Spice"}
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
          <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                  <div className="d_plan_overview">
                      <p className="d_head">Keto Diet</p>
                      <p className="d_weeks">4 Weeks</p>
                      <p className="d_amt">200 KWD</p>
                      <p className="d_namehead">Vegetables and Legumes/beans</p>
                      <p className="d_names">Brocolli,Cabbages,Cauliflower,ollives,Spinach,Cucumber</p>
                      <div className="diet_btns">
                      <Button className="d_cancel" onClick={()=>props.CloseModal(false)}>Cancel</Button>
                      <NavLink to="/goalweight"><Button className="d_confirm">Confirm</Button></NavLink>
                      </div>
                  </div>
              </Grid>  
              <Grid item xs={12} md={7} className="diet_filter"> 
                 <p className="fil_cat">Filter Category</p>
                 {Mealplan.map((data,index)=>
                 <label className="filter_dplans">{data.items}</label>
                 )}
                 <p className="fil_cat">Instruction</p>
                 {Salt.map((data,index)=>
                 <label className="salt_dplans">{data.items}</label>
                 )}
                 <div>
                  {Spice.map((data,index)=>
                 <label className="spice_dplans">{data.items}</label>
                 )}
                 </div>
              </Grid>  
          </Grid>
          <Modal
          visible={openmodal}
          onCancel={CloseModal}
          footer={false}
          title={false}
          centered
          className="meal_plan_modal"
          width={1000}
          >
           <MenuListModal/>
          </Modal>
        </div>
    )
}