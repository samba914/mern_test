import React, { Component } from 'react'  
import { Carousel } from 'react-responsive-carousel';
import image1 from "./image/Match-Ready_Week_3_Internal_Banners_WebBanner.jpg"
import image2 from"./image/HeatWave_webbanner_ffffff.jpg"
import image3 from "./image/Chuck-Taylors-History_webbanner_ffffff.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
  
export class BootstrapCarouselDemo extends Component {  
        render() {  
                return (  
                       
                                <div class="carousel-wrapper">
                                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                        <div>
                                            <img src={image1} alt="down" />
                                        </div>
                                        <div>
                                            <img src={image2} alt="down"/>
                                        </div>
                                        <div>
                                            <img src={image3} alt="down"/>
                                        </div>
                                    </Carousel>
                                </div>
                        
                )  
        }  
}  
  
export default BootstrapCarouselDemo  