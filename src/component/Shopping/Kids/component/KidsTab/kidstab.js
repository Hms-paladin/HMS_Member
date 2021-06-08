import react from 'react';
import './kidstab.css';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import Shoppingbaby from '../../../../../images/ShoppingBaby.png'
import RightArrow from '../../../../../images/rightarrow.svg'
import LeftArrow from '../../../../../images/leftarrow.svg'
import KidsImage1 from '../../../../../images/shopping/kidsImage1.png'
import KidsImage2 from '../../../../../images/shopping/kidsImage2.png'
import KidsImage3 from '../../../../../images/shopping/kidsImage3.png'
import KidsImage4 from '../../../../../images/shopping/kidsImage4.png'
import KidsImage5 from '../../../../../images/shopping/kidsImage5.png'

function ShoppingKids() {
    function NextProducts() {
        alert("test")
    }

    return (
        <div>

            {/* <TabPane  > */}
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
                    <Carousel controls={"false"} style={{ width: "100%", height: "300px" }}>
                        <Carousel.Item style={{ display: "flex", height: "200px" }}>
                            <Grid xs={12} className="Products_Part"><img src={KidsImage4} style={{ width: "65%", height: "180px" }} className="KidsImages4" alt="First slide" />
                                <div className="KidsImage_Title">Tom kids Package</div>
                            </Grid>
                            <Grid xs={12}><img src={KidsImage5} className="KidsImages5" style={{ width: "60%", height: "180px" }} alt="First slide" />
                                <div className="KidsImage_Title">Wooden pyramid Rings Tower</div>
                            </Grid>
                            <Grid xs={12}><img src={KidsImage2} className="KidsImages2" style={{ width: "60%", height: "180px" }} alt="First slide" />
                                <div className="KidsImage_Title">firefly Drone</div>
                            </Grid>
                            <Grid xs={12}><img src={KidsImage3} className="KidsImages3" style={{ width: "60%", height: "180px" }} alt="First slide" />
                                <div className="KidsImage_Title">Rollin Giraffe Cycle</div>
                            </Grid>
                            <Grid xs={12}><img src={KidsImage1} className="KidsImages1" style={{ width: "80%", height: "180px" }} />
                                <div className="KidsImage_Title">Rollin cycle</div>
                            </Grid>
                        </Carousel.Item>
                        <Carousel.Item>
                            eejgeod
                        </Carousel.Item>
                        <Carousel.Item>
                            welcome
                        </Carousel.Item>
                    </Carousel>
                    <img src={RightArrow} className="RightArrow_Product" onClick={() => NextProducts()} />


                </div>


            </div>



        </div>
    )
}
export default ShoppingKids;