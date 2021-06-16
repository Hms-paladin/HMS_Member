import React, { useEffect, useState } from 'react'
import DietImage from '../../../images/Diet_b.png'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Labelbox from '../../../helpers/labelbox/labelbox'
import b_fast1 from '../../../images/d_bfast1.jpg'
import b_fast from '../../../images/d_bfast.jpg'
import b_fast2 from '../../../images/d_bfast2.jpg'
import b_fast3 from '../../../images/d_bfast.jpg'
import {NavLink} from 'react-router-dom'
import CheckIcon from '@material-ui/icons/Check';
import './MenuListModal.scss'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
export default function MenuListModal(props){
    const images=[
        {id:1,img:b_fast1,name:"Eggs,home fries,toast"},
        {id:2,img:b_fast,name:"Eggs,home fries,toast"},
        {id:3,img:b_fast2,name:"Friendly breakfast"},
        {id:4,img:b_fast3,name:"Friendly breakfast"},
        {id:5,img:b_fast3,name:"Eggs,home fries,toast"},
        {id:6,img:b_fast3,name:"Friendly breakfast"}
    ]
    const [ok,setok]=React.useState(false)
    const [Items,setItems]=useState("")
    const TickClick=(id)=>{
        FoodSession.map((data)=>{
        if(data.dietmenuitemid===id){
        setItems(1)
        setok(!ok)
        }
        else{
            setItems(0)
            setok(false)  
        }
    })
    }
   
    const [FoodSession,setFoodSession]=useState([])
    const [sessionId,setsessionId]=useState("")
    useEffect(()=>{
        let mealData=[]
        props.MealList[0]?.SessionList.map((data)=>{
            mealData.push(data.foodSession)
            setsessionId(data.dietsessionId)
        })
        
        setFoodSession(mealData)
    },[ props.MealList])
    console.log(sessionId,"ddd")
    return(
        <div>
            <div>
                <Grid container spacing={4} >
                    <Grid item xs={6} md={6} spacing={4}>
                
                <div style={{display:"flex"}} className="menu_list_details">
                    <div className="d_img_div">
                       <div className="d_fst_imgdiv">
                      <div className="diet_menu_div"><img src={DietImage}/></div>
                      <div> <p className="d_menu_head">Helthy Eats</p> <p className="d_del_adrs">Jabriya</p>
                        <p>
                        {[...Array(5)].map((img,index)=>(
                      <StarIcon className="star_lab_icon"/> 
                      ))}  
                       </p></div>
                       </div> 
                    </div>
                    <div> <p className="menu_d_name">{props.MealList[0]?.diet_package_name}</p>
                    <p className="mplan_per">{props.MealList[0]?.diet_duration/7} Weeks</p>
                    <p className="menu_amt">{props.MealList[0]?.diet_price} KWD</p></div>
                </div>
                {/* to meanu of list choosing buttons */}
                <ButtonGroup color="primary" aria-label="outlined primary button group" className="week_btns">
                    <Button>Week1</Button>
                    <Button>Week2</Button>
                    <Button>Week3</Button>
                    <Button>Week4</Button>
               </ButtonGroup>
               <ButtonGroup color="primary" aria-label="outlined primary button group" className="week_btns">
                    <Button>Fri</Button>
                    <Button>Sat</Button>
                    <Button>Sun</Button>
                    <Button>Mon</Button>
                    <Button>Tue</Button>
                    <Button>Wed</Button>
                    <Button>Thu</Button>
               </ButtonGroup>
               {/* repeat menu part */}
              
                <div className="re_menu_of">Repeat Menu of</div>
                <div className="re_menu_div">
                  <div className="d_select_div"><Labelbox type="select"
                    // dropdown={[ {id:"1",week:"Week1"},{id:2,week:"Week2"},{id:3,week:"Week3"},{id:4,week:"Week4"}]}

                  /></div>
                   <div  className="d_datepicker"><Labelbox type="datepicker"/></div>
                </div>
                <div className="d_select_btn_div"><NavLink to="/goalweight"><Button className="s_btn">Select</Button></NavLink></div>
                </Grid>
                {/* mealplan list */}
               
                <Grid item xs={12} md={6} className="tab_list_view">
        
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Break fast" key="1">
                        <div className="b_fast_container">
                        {sessionId===7&&FoodSession.map((data,index)=>{
                            console.log(FoodSession.length,"files")
                        return(
                        <div className="b_fast_imgparent_div"  onClick={()=>TickClick(data.dietmenuitemid)} key={index}>
                            <div className="b_fast_img_div" ><img src={data[0].diet_filename} className={"b_fast_img"}/></div>
                           <div className="bottom_labels_d">
                               <label className="b_fast_name">{data[0].diet_itemname}</label>
                               {Items===1&&ok?<CheckIcon className="b_fast_tick"/>:""}
                            </div>
                        </div>
                        )})}
                        </div>
                    </TabPane>
                    <TabPane tab="Lunch" key="2">
                    <div className="b_fast_container">
                        
                    </div>
                    </TabPane>
                    <TabPane tab="Dinner" key="3">
                    <div className="b_fast_container" >
                      
                        </div>
                    </TabPane>
                    </Tabs>
                
                </Grid>
              
                </Grid>
            </div>
        </div>
    )
}
