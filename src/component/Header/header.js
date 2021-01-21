import React from "react";
import { Layout, Menu } from 'antd';
import Logo from "../../images/Logo.png";
import search from "../../images/loupe.png";

import { Dropdown } from 'react-bootstrap'
import { Input } from 'antd';
import "./header.scss";
import Button from '@material-ui/core/Button'
import Searchresult from "../Searchresult/searchresult";
import Myprofile from "../Myprofile/myprofile";
import Editprofile from "../Myprofile/editprofile";

const { Search } = Input;



const { Header, Content } = Layout;
const onSearch = value => console.log(value);


function HeaderLayout (props) {
    return(
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%',display:"flex",borderBottom: "1px solid #f0f0f0" }}>
            {/* <div className="logo" > */}
                <img className="HMSlogo" src={Logo} />
            {/* </div> */}
            <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ zIndex: 1, width: '100%', left: "10%" }}>
                <Menu.Item key="1"><div>Home</div></Menu.Item>
                <Menu.Item key="2">Shopping</Menu.Item>
                {/* <Menu.Item key="3">One Watch</Menu.Item> */}
            </Menu>
            <Dropdown className="search_dropdown">
  <Dropdown.Toggle  id="dropdown-basic">
  <Search
      placeholder="Doctor or Speciality,Clinic"
      allowClear
      onSearch={onSearch}
      style={{ width: 300, margin: '0 10px' }}
    /> 
                <img className="searchico"src={search} />

     </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><Button className="categorybtn">Doctor</Button></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><Button className="categorybtn">Speciality</Button></Dropdown.Item>
    

  </Dropdown.Menu>
</Dropdown>

            <Dropdown className="avatar_cont">
  <Dropdown.Toggle  id="dropdown-basic">
      <img src={Logo}/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-2">My Appointments</Dropdown.Item>
    <Dropdown.Item href="#/action-3">My Bookings</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
            </Header>
            <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{  minHeight: 380 }}>
                {/* {props.children} */}
                {/* <Searchresult/> */}
                <Myprofile/>
                {/* <Editprofile/> */}
            </div>
            </Content>
        </Layout>
    )
}

export default HeaderLayout;