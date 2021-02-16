import react from "react";
import './index.css'
import search from '../../../images/search.svg'
import Shoppingbaby from '../../../images/ShoppingBaby.png'
import RightArrow from '../../../images/rightarrow.svg'
import LeftArrow from '../../../images/leftarrow.svg'
import KidsImage1 from '../../../images/shopping/kidsImage1.png'
import KidsImage2 from '../../../images/shopping/kidsImage2.png'
import KidsImage3 from '../../../images/shopping/kidsImage3.png'
import KidsImage4 from '../../../images/shopping/kidsImage4.png'
import KidsImage5 from '../../../images/shopping/kidsImage5.png'

import Grid from '@material-ui/core/Grid';
import { Switch, Input, Slider, Progress } from 'antd';
import { Tabs, Carousel } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

// const KidsImages=[{img:KidsImage1},{img:KidsImage1},{img:KidsImage1},{img:KidsImage1},{img:KidsImage1}]


function KidsFlow() {
    function NextProducts() {

    }
    //Slider the image:
    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Grid>

            <div style={{ width: "100%", backgroundColor: "#f2efef", height: "70px", }}>
                {/* <Grid item xs={12} md={6} spacing={2}>

                    <div style={{ position: "relative" }}><Input type="search " placeholder={"Search for products,brands and more"} className="srch_his" style={{ marginTop: "2%" }} /><img src={search} style={{ position: "absolute", top: "25px", right: "17px" }} /></div></Grid> */}
                <div className="Shopping_Search" style={{ marginLeft: "30%" }}>
                    <Input type="search " placeholder={"Search for products,brands and more"} style={{ margin: "20px 0px", width: "50%", borderRadius: "7px 0px 0px 7px", height: "34px" }} />
                    <img src={search} style={{ background: "rgb(164 163 164)", borderRadius: "0px 7px 7px 0px", padding: "7px 8px", position: "relative", bottom: "3px" }} />
                </div>

            </div>
            <Tabs defaultActiveKey="1" onChange={callback} tabBarStyle={{ backgroundColor: "#82AE3F", color: "white", paddingLeft: "5%" }}>
                {/* <TabPane tab={<div className="Tab1">Kids</div>} key="1"> */}
                <TabPane tab={<Grid><div className="TabFirst">Kids</div></Grid>} key="1" >
                    <div className="Shopping_slider" style={{ marginLeft: "8%" }}>
                        <img src={LeftArrow} style={{ position: "relative", left: "26px", background: "white", padding: "10px 5px", borderRadius: "0px 3px 3px 0px" }} className="ShoppingRightArrow" />
                        <img src={Shoppingbaby} style={{ width: "86%" }} className="Shopping_baby_image" />
                        <img src={RightArrow} style={{ position: "relative", right: "26px", background: "white", padding: "10px 5px", borderRadius: "3px 0px 0px 3px" }} className="ShoppingRightArrow" />
                    </div>
                    <div className="ShoppingProducts" >
                        <Grid className="ProductsHeader">
                            <div className="Product_Sellers">Best Sellers</div>
                            <div className="Products_SeeMore">See More</div>
                        </Grid>
                        <div className="Products_Align">
                        {/* <Carousel afterChange={onChange}> */}
                            <Grid className="Products_Part"><img src={KidsImage4} className="KidsImages4" />
                                <div className="KidsImage_Title">Tom kids Package</div>
                            </Grid>
                            <Grid><img src={KidsImage5} className="KidsImages5" />
                                <div className="KidsImage_Title">Wooden pyramid Rings Tower</div>
                            </Grid>
                            <Grid><img src={KidsImage2} className="KidsImages2" />
                                <div className="KidsImage_Title">firefly Drone</div>
                            </Grid>
                            <Grid><img src={KidsImage3} className="KidsImages3" />
                                <div className="KidsImage_Title">Rollin Giraffe Cycle</div>
                            </Grid>
                            <Grid><img src={KidsImage1} className="KidsImages1" />
                                <div className="KidsImage_Title">Rollin cycle</div>
                            </Grid>
                            <img src={RightArrow} className="RightArrow_Product" onClick={() => NextProducts()} />
                            {/* </Carousel> */}

                        </div>

                    </div>

                    <Grid>

                    </Grid>
                </TabPane>
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