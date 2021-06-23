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
import moment from 'moment'
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
    const [selectId,setSelectId]=useState("")
    const TickClick=(id)=>{
        setSelectId(id)
        var Data=FoodSession.find((data)=>{
            return(data.dietmenuitemid===id)
        })
        if(Data.dietmenuitemid===id){
        setItems(1)
        setok(!ok)
        }
        else{
            setItems(0)
            setok(false)  
        }


    }
   
    const [FoodSession,setFoodSession]=useState([])
    const [sessionId,setsessionId]=useState("")
    const [SessionList,setSessionList]=useState("")
    const [DietCompany,setDietCompany]=useState("")
    const [selectedBtn, setSelectedBtn] =useState(1);
    const [selectedWeekBtn,setSelectedWeekBtn]=useState(1)
    useEffect(()=>{
        let mealData=[]
        let DietData=[]
        if(props.MealList[0]?.SessionList.length>0){
        props.MealList[0]?.SessionList[0].foodSession.map((data)=>{
            mealData.push(data)
            // setsessionId(data.dietsessionId)
        })
    }
      props.DietCompany.map((data)=>{
        DietData.push(data)
      })
        setDietCompany(DietData)
        setFoodSession(mealData)
        var d1=moment(props.MealList[0]?.to_date).format("YYYY-MM-DD")
        var d2=moment(props.MealList[0]?.from_date).format("YYYY-MM-DD")
        const date1 = props.MealList[0]?.to_date;
        const date2 = props.MealList[0]?.from_date
        var diff=Math.round(date2-date1);
        var date=  Math.round(diff/(7 * 24 * 60 * 60 * 1000));
    console.log(d1,d2,diff,date,"props")
      
    },[ props.MealList,props.DietCompany])
  
    function weeksBetween(d1, d2) {
    }
    return(
        <div>
            <div>
                <Grid container spacing={4} >
                    <Grid item xs={6} md={6} spacing={4}>
                
                <div style={{display:"flex"}} className="menu_list_details">
                    <div className="d_img_div">
                       <div className="d_fst_imgdiv">
                      <div className="diet_menu_div"><img src={DietCompany[0]?.vendor_profile_path}/></div>
                      <div> <p className="d_menu_head">{DietCompany[0]?.dietcompanyname}</p> <p className="d_del_adrs">{DietCompany[0]?.vendor_address}</p>
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
                <ButtonGroup   className="week_btns"   variant="contained">
                    <Button color={selectedBtn === 1 &&"secondary"} onClick={()=>setSelectedBtn(1)}>Week1</Button>
                    <Button color={selectedBtn === 2 &&"secondary"} onClick={()=>setSelectedBtn(2)}>Week2</Button>
                    <Button color={selectedBtn === 3 && "secondary"} onClick={()=>setSelectedBtn(3)}>Week3</Button>
                    <Button color={selectedBtn === 4 && "secondary"} onClick={()=>setSelectedBtn(4)}>Week4</Button>
               </ButtonGroup>
               <ButtonGroup variant="contained" className="week_btns">
                    <Button color={selectedWeekBtn === 1 && "secondary"} onClick={()=>setSelectedWeekBtn(1)}>Fri</Button>
                    <Button color={selectedWeekBtn === 2 && "secondary"} onClick={()=>setSelectedWeekBtn(2)}>Sat</Button>
                    <Button color={selectedWeekBtn === 3 && "secondary"} onClick={()=>setSelectedWeekBtn(3)}>Sun</Button>
                    <Button color={selectedWeekBtn === 4 && "secondary"} onClick={()=>setSelectedWeekBtn(4)}>Mon</Button>
                    <Button color={selectedWeekBtn === 5 && "secondary"} onClick={()=>setSelectedWeekBtn(5)}>Tue</Button>
                    <Button color={selectedWeekBtn === 6 && "secondary"} onClick={()=>setSelectedWeekBtn(6)}>Wed</Button>
                    <Button color={selectedWeekBtn === 7 && "secondary"} onClick={()=>setSelectedWeekBtn(7)}>Thu</Button>
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
                        {FoodSession&&FoodSession.map((data,index)=>
                         
                        <div className="b_fast_imgparent_div"  onClick={()=>TickClick(data.dietmenuitemid)} key={index}>
                            <div className="b_fast_img_div" ><img src={data.diet_filename} className={"b_fast_img"}/></div>
                           <div className="bottom_labels_d">
                               <label className="b_fast_name">{data.diet_itemname}</label>
                               {selectId===data.dietmenuitemid?<CheckIcon className="b_fast_tick"/>:""}
                            </div>
                        </div>
                        )}
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
