import React, { Component } from 'react'  
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
  
export class BootstrapCarouselDemo extends Component {  
        render() {  
                return (  
                       
                                <div class="carousel-wrapper">
                                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                        <div>
                                            <img src="./Match-Ready_Week_3_Internal_Banners_WebBanner.jpg" alt="down" />
                                        </div>
                                        <div>
                                            <img src="./image/HeatWave_webbanner_ffffff.jpg" alt="down"/>
                                        </div>
                                        <div>
                                            <img src="./image/Chuck-Taylors-History_webbanner_ffffff.jpg" alt="down"/>
                                        </div>
                                    </Carousel>
                                </div>
                        
                )  
        }  
}  
  
export default BootstrapCarouselDemo  