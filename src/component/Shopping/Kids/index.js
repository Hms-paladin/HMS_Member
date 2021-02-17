import React, { useState } from 'react';
import './index.css'
import KidsTab from './component/KidsTab/kidstab'
import search from '../../../images/search.svg'


import Grid from '@material-ui/core/Grid';
import { Switch, Input, Space, Slider, Progress, Tabs, Menu, Dropdown, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
const onSearch = value => console.log(value);
//tabs:

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

// const KidsImages=[{img:KidsImage1},{img:KidsImage1},{img:KidsImage1},{img:KidsImage1},{img:KidsImage1}]


function KidsFlow() {
  
    const menu = (
        <Menu className="KidsDropDown">
            <Menu.Item>
                Toys & Gaming
          </Menu.Item>
            <Menu.Item>
               kids clothing
          </Menu.Item>
            <Menu.Item>
                kids watching
          </Menu.Item>
          <Menu.Item>
              kids Shoes
          </Menu.Item>
        </Menu>
    );


    return (
        <Grid>

            <div style={{ width: "100%", backgroundColor: "#f2efef", height: "70px", textAlign: "center" }}>
                <Space direction="vertical">
                    {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} /> */}
                    <Search placeholder="Search for products,brands and more" onSearch={onSearch} style={{ width: "250%", marginTop: "10%" }} />
                </Space>
                {/* <Grid item xs={12} md={6} spacing={2}>

                    <div style={{ position: "relative" }}><Input type="search " placeholder={"Search for products,brands and more"} className="srch_his" style={{ marginTop: "2%" }} /><img src={search} style={{ position: "absolute", top: "25px", right: "17px" }} /></div></Grid> */}
                {/* <div className="Shopping_Search" style={{ marginLeft: "30%" }}>
                    <Input type="search " placeholder={"Search for products,brands and more"} style={{ margin: "20px 0px", width: "50%", borderRadius: "7px 0px 0px 7px", height: "34px" }} />
                    <img src={search} style={{ background: "rgb(164 163 164)", borderRadius: "0px 7px 7px 0px", padding: "7px 8px", position: "relative", bottom: "3px" }} />
                </div> */}

            </div>
            <Tabs defaultActiveKey="1" onChange={callback} tabBarStyle={{ backgroundColor: "#82AE3F", color: "white", paddingLeft: "5%" }}>
                <TabPane tab={<Grid><div className="TabFirst" ><Dropdown overlay={menu} placement="bottomLeft" trigger={"click"} >
                                <div className="Kids_Menu">Kids</div>
                            </Dropdown></div></Grid>} key="1">
                            


                    <KidsTab />

                </TabPane>
                {/* <TabPane tab={<div className="Tab1">Kids</div>} key="1"> */}
                <TabPane tab="Women" key="2">
                    Content of Tab Pane 2
    </TabPane>
                <TabPane tab="Men" key="3">
                    Content of Tab Pane 3
    </TabPane>
            </Tabs>
        </Grid>
    )
}

export default KidsFlow;

{/* <div style={{ position: "relative" }}><Input type="search " placeholder={"Search for products,brands and more"}  style={{ marginTop:"1%",width:"50%" }} /><img src={search} style={{ position: "absolute", top: "1%", right: "17px" }} /></div> */ }