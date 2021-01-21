import React from "react";
import { Layout, Menu } from 'antd';
import Logo from "../../images/Logo.png";
import "./header.scss";

const { Header, Content } = Layout;

function HeaderLayout (props) {
    return(
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%',display:"flex",borderBottom: "1px solid #f0f0f0" }}>
            {/* <div className="logo" > */}
                <img className="HMSlogo" src={Logo} />
            {/* </div> */}
            <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ position: 'fixed', zIndex: 1, width: '100%', left: "10%" }}>
                <Menu.Item key="1"><div>Home</div></Menu.Item>
                <Menu.Item key="2">Shopping</Menu.Item>
                <Menu.Item key="3">One Watch</Menu.Item>
            </Menu>
            </Header>
            <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                {props.children}
            </div>
            </Content>
        </Layout>
    )
}

export default HeaderLayout;