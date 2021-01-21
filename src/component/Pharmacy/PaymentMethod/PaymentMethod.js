import React from 'react';
import Button from '@material-ui/core/Button';
import './PaymentMethod.scss'
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Left from '../../../images/back.svg'
import Right from '../../../images/right.svg'
import Atm from '../../../images/atm.png'
import Logo from "../../../images/Logo.png";
import Labelbox from '../../../helpers/labelbox/labelbox';
import {NavLink} from 'react-router-dom'
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;
export default class CancelPayment extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          mode: 'left',
        };
      }
    
      handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
      };
    
    render()
    {
        const { mode } = this.state;
        return(
            <div className="PaymentMethod">
               <div className="option_container">
                   <div><p className="select_text">Select Option to Pay <span className="option_amt">55 KWD</span></p></div>
                   
               </div>
               <div className="payment_method_container">
                   <p className="select_pay_text">Please Select a Payment Method</p>
                      <Divider light  className="select_divider"/>
                      <Grid container  className="saved_cards_container">
                        <Grid item xs={12} md={5} className="payment_method_child">
                           <p className="saved_cards">Saved Cards</p>
                           <div className="saved_cards_parent">
                             <img src={Right} className="card_move"/>
                             <div className="debit_container">
                             <div className="debit_child">                          
                               <img src={Atm} className="deb_img"/> 
                               </div>
                               </div> 
                               <div className="pay_carddetails">
                                    <h1 style={{fontSize:"32px"}}>**** **** **** 3118</h1>
                                    <div className="pay_carddate">
                                        <span>08/18</span>
                                        <span style={{marginLeft:"30px"}}>07/23</span>
                                    </div>
                                    <h4>K.KHADIJA</h4>  
                                </div>                           
                               <img src={Left} className="card_move"/>
                           </div>
                      </Grid>
                      <Grid item xs={8} md={5}>
                         <div className="payment_method">
                             
 




       <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>

        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 260 }}>
          {/* {[...Array(3).keys()].map(i => (
            <TabPane tab={`${i===0?"Credit":i===1?"Knet":i===2?"Credit":""}`} key={i}> */}
              <TabPane tab={<span><label className="l_list">Credit</label><img src={Logo} className="l_pay"/></span>} key={1}>
              <div className="divider_line"></div>
                             <div className="payment_method_list">
                                 <Labelbox type="text" labelname="Card Number"/>
                                 <Labelbox type="text" labelname="Card Holder Name"/>
                             <Grid container>
                                <Grid item md={8} sm={8}>
                                    <div className="select_expiry_date"><Labelbox type="select" labelname="Expiry Date" value="05"/><span className="select_labelbox"><Labelbox type="select" value="2010"/></span></div>
                                </Grid>
                                <Grid item md={4} sm={4}>
                                    <div className="payment_ccv">
                                        <Labelbox type="number" labelname="CVV"/>
                                    </div>
                                </Grid>
                             </Grid>
                             </div>
                             
                        
            </TabPane>
            <TabPane tab={<span><label className="l_list">Knet</label><img src={Logo} className="l_pay"/></span>} key={2}> 

            </TabPane>
            <TabPane tab={<span><label className="l_list">Credit</label><img src={Logo} className="l_pay"/></span>} key={3}> 
            </TabPane>
          {/* ))} */}
        </Tabs>
      </div> 
  
                             
      </div>
                      </Grid>
                      <Grid item xs={4} md={2}>
                        <div className="summery_parent"> 
                          <div className="summery_div">
                            <p className="summery_text">Summary</p>
                            <div className="sub_total_div"><p>SubTotal</p><span>55</span></div>
                                 <Divider/>
                            <div className="sub_total_div"><p>SubTotal</p><span>55</span></div>
                            </div>
                            </div> 
                      </Grid>
                     
                      </Grid>  
                     
                      
              </div>
              <div className="pay_now_container"><Button className="pay_cancel">Cancel Payment</Button><NavLink to="paymentreceive"><Button className="pay_now_button" onClick={this.payrReceivePush}>Pay Now</Button></NavLink></div>
            </div>
        )
    }
}