import React from 'react'
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
    const TickClick=(key,id)=>{
        alert(key)
        if(images.id===id){
        setok(!ok)
        }
    }
    return(
        <div>
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={6} md={6} spacing={4}>
                
                <div style={{display:"flex"}} className="menu_list_details">
                    <div className="d_img_div">
                       <div className="d_fst_imgdiv">
                      <div className="diet_menu_div"><img src={DietImage}/></div>
                      <div> <p className="d_menu_head">Helthy Eats</p> <p className="d_del_adrs">fghj</p>
                        <p>
                        {[...Array(5)].map((img,index)=>(
                      <StarIcon className="star_lab_icon"/> 
                      ))}  
                       </p></div>
                       </div> 
                    </div>
                    <div> <p className="menu_d_name">Keto Diet</p><p className="mplan_per">4weeks</p><p className="menu_amt">200 KWD</p></div>
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
              
                <label className="re_menu_of">Repeat Menu of</label>
                <div className="re_menu_div">
                  <div style={{width:"30%",margin:"10px  20px 0px 0px"}}><Labelbox type="select"/></div>
                   <div style={{width:"30%"}}><Labelbox type="datepicker"/></div>
                </div>
                <div className="d_select_btn_div"><Button className="s_btn">Select</Button></div>
                </Grid>
                {/* mealplan list */}
               
                <Grid item xs={12} md={6} className="tab_list_view">
        
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Break fast" key="1">
                        <div className="b_fast_container" >
                        {images.map((data,index)=>
                        <div className="b_fast_imgparent_div" onClick={()=>TickClick(data.id)} key={index}>
                            <div className="b_fast_img_div"><img src={data.img} className={"b_fast_img"}/></div>
                           <div className="bottom_labels_d">
                               <label className="b_fast_name">{data.name}</label>
                               {ok?<CheckIcon className="b_fast_tick"/>:""}
                            </div>
                        </div>
                        )}
                        </div>
                    </TabPane>
                    <TabPane tab="Lunch" key="2">
                    </TabPane>
                    <TabPane tab="Dinner" key="3">
                    </TabPane>
                    </Tabs>
                
                </Grid>
              
                </Grid>
            </div>
        </div>
    )
}
