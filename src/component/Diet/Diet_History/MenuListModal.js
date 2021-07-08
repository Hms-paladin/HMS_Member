import React, { useEffect, useState} from 'react'
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
import {NavLink, useHistory} from 'react-router-dom'
import ValidationLibrary from '../../../helpers/validationfunction'
import CheckIcon from '@material-ui/icons/Check';
import './MenuListModal.scss'
import { Tabs } from 'antd';
import moment from 'moment'
const { TabPane } = Tabs;
export default function MenuListModal(props){
    let history=useHistory()
    const [ok,setok]=React.useState(false)
    const [Items,setItems]=useState("")
    const [selectId,setSelectId]=useState("")
    const [sessionId,setsessionId]=useState([])
    const [SessionList,setSessionList]=useState([])
    const [weeks,setweeks]=useState([])
    const TickClick=(id)=>{
        setSelectId(id)
        // props send booking confirmation
        var Data=FoodSession.find((data)=>{
            return(data.dietmenuitemid===id)
        })
        setsessionId(Data)
        // 
        if(Data.dietmenuitemid===id){
        setItems(1)
        setok(!ok)
        }
        else{
            setItems(0)
            setok(false)  
        }

      console.log("Data",Data)
    }
   
    const [FoodSession,setFoodSession]=useState([])
    const [DietCompany,setDietCompany]=useState("")
    const [selectedBtn, setSelectedBtn] =useState(1);
    const [selectedWeekBtn,setSelectedWeekBtn]=useState(1)
    const [LoadWeeks,setLoadWeeks]=useState([])
    const [WeekMenus,setWeekMenus]=useState({
        date:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        weekselect:{
            value:1,
            validation:[{name:"required"}],
            error:null,
            errmsg:null
        }
    })
    const ClickSelectedBtn=(id)=>{
     setSelectedBtn(id)
    }
    useEffect(()=>{
        let mealData=[]
        let DietData=[]
        // let LoadWeeks=[]
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
        var WeeksList=[]
        var LoadDatas=[]
        var d1=props.MealList[0]?.to_date
        var d2=props.MealList[0]?.from_date
        const date1 =new Date(d1);
        const date2 = new Date(d2);
        var diff=Math.abs(date2 - date1);
        var week=  Math.round(diff/(7 * 24 * 60 * 60 * 1000));
        if(week===1){
            WeeksList.push({id:1,value:"Week 1"})
        } if(week===2){
            WeeksList.push({id:1,value:"Week 1"},{id:2,value:"Week 2"}) 
        } if(week===3){
            WeeksList.push({id:1,value:"Week 1"},{id:2,value:"Week 2"},{id:3,value:"Week 3"})
        } if(week===4){
            WeeksList.push({id:1,value:"Week 1"},{id:2,value:"Week 2"},{id:3,value:"Week 3"},{id:4,value:"Week 4"})
        }
        // weeks.WeeksList.map((data,index)=>{
        //     LoadWeeks.push({id:data.id,value:data.week})
        // })
        setweeks(WeeksList)
        // setLoadWeeks(WeeksList)

    console.log(props,"propsddd")
  
    },[ props.MealList,props.DietCompany])
    function checkValidation(data, key) {

        var errorcheck = ValidationLibrary.checkValidation(
            data,
            WeekMenus[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: WeekMenus[key].validation,
        };
        setWeekMenus((prevState)=>({
            ...prevState,
            [key]: dynObj,
        }))
    }
   const SubmitMenu=()=>{
 
    var mainvalue = {};
    var targetkeys = Object.keys(WeekMenus);
    for (var i in targetkeys) {
        var errorcheck = ValidationLibrary.checkValidation(
            WeekMenus[targetkeys[i]].value,
            WeekMenus[targetkeys[i]].validation
        );
        WeekMenus[targetkeys[i]].error = !errorcheck.state;
        WeekMenus[targetkeys[i]].errmsg = errorcheck.msg;
        mainvalue[targetkeys[i]] = WeekMenus[targetkeys[i]].value;
    }
    var filtererr = targetkeys.filter((obj) => WeekMenus[obj].error == true);
    if(filtererr.length>0){
        
    }else{
        var MealList=[]
        for(let i=0;i<FoodSession.length;i++){
            let ObjectData={
                "diet_menu_item_id":FoodSession[i].dietmenuitemid,
                "diet_session_id":FoodSession[i].dietsessionId,
                "diet_day_id":selectedWeekBtn,
                "diet_week_id":selectedBtn
    
            }
            MealList.push(ObjectData)


        }      
    console.log(MealList,"filtererr")


        history.push({
            pathname:"/goalweight",
            state:{
                Meals:props.MealList,
                sessionId:MealList,
                DietCompany:props.DietCompany
            }
        })
        WeekMenus.date.value=""
        WeekMenus.weekselect.value=""
    }   
    setWeekMenus((prevState)=>({
        ...prevState,
    })) 
   
    
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
             
            {/* //  to meanu of list choosing buttons  */}
                 <ButtonGroup   className="week_btns">
                 {weeks.map((data,index)=>{
                     const IndexId=index+1
                 return(
                    <Button className={selectedBtn === IndexId &&"weekBtn_change_clr"} key={index} onClick={()=>ClickSelectedBtn(IndexId)}>{data.value}</Button> 
                 )}
                 )}  
               </ButtonGroup> 

               <ButtonGroup  className="week_btns">
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
                         dropdown={weeks}
                         changeData={(data) => checkValidation(data, "weekselect")}
                         value={WeekMenus.weekselect.value}
                         error={WeekMenus.weekselect.error}
                         errmsg={WeekMenus.weekselect.errmsg}
                  /></div>
                   <div  className="d_datepicker">
                       <Labelbox type="datepicker"
                         minDate={new Date()}
                         changeData={(data) => checkValidation(data, "date")}
                         value={WeekMenus.date.value}
                         error={WeekMenus.date.error}
                         errmsg={WeekMenus.date.errmsg}
                       />
                       </div>
                </div>
                <div className="d_select_btn_div">
                        <Button className="s_btn" onClick={SubmitMenu}>Select</Button>
                </div>
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
