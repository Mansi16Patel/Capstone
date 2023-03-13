import React from 'react';
import Slider from "react-slick";
import Red from "../../assets/images/Red.jpg"
import Orange from "../../assets/images/Orange.jpg"
import Yellow from "../../assets/images/Yellow.jpg"
import Green from "../../assets/images/Green.jpg"
import Blue from "../../assets/images/Blue.jpg"
import Indigo from "../../assets/images/Indigo.jpg"
import Violet from "../../assets/images/Violet.jpg"
import "./testimonial.css";

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidestoShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    SlidesToScroll:1,
                    infinite: true,
                    dots:true,
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    SlidesToScroll:1,
                   
                },
            }
        ]
    }

    return<Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <h3 className='testtitle'>RESEARCH &amp; ANALYSIS</h3><br/>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={Red} className="w-25 h-25 rounded-2" alt=""/>
                    <div>
                    <h4 className="testinfo">Our team has decades of primary and secondary research experience, and the expertise and tools to gain meaningful insights.</h4>
                    
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <h3 className='testtitle'>PLANNING &amp; STRATEGY</h3><br/>
               
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={Orange} className="w-25 h-25 rounded-2" alt=""/>
                    <div>
                    <h4 className="testinfo"> We are experts in every aspect of devising strategy and developing value-added, innovative business plans.</h4>
                   
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <h3 className='testtitle'>BUSINESS IMPROVEMENT</h3><br/>
                
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={Yellow} className="w-25 h-25 rounded-2" alt=""/>
                    <div>
                    <h4 className="testinfo">Improving your business’s competitive advantage takes initiative, information, and intuition.</h4>
                    
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <h3 className='testtitle'>EXECUTIVE TRAINING &amp; COACHING</h3><br/>
                
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={Green} className="w-25 h-25 rounded-2" alt=""/>
                    <div>
                    <h4 className="testinfo">With the right information at the right time, and with proper guidance and oversight, you and your employees can achieve more.</h4>
                   
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <h3 className='testtitle'>INVESTMENT READINESS</h3><br/>
                
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={Blue} className="w-25 h-25 rounded-2" alt=""/>
                    <div>
                    <h4 className="testinfo">Facilitate Growth, Maximize Value, Mitigate Risk.</h4>
                    
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <h3 className='testtitle'>DEI &amp; ACCESSIBILITY</h3><br/>
                
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={Indigo} className="w-25 h-25 rounded-2" alt=""/>
                    <div>
                    <h4 className="testinfo">Your business can unlock dormant performance, and return more meaningful impact with our Inclusion, Diversity, Equity, and Accessibility services.</h4>
                    
                    </div>
                </div>
            </div>
             <div className="testimonial py-4 px-3">
                <h3 className='testtitle'>Other Services</h3><br/>
                

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={Violet} className="w-25 h-25 rounded-2" alt=""/>
                    <div>
                    <h4 className="testinfo">Digital Transformation; <br/>
                        White Papers; <br/>
                        Go-To Market Strategies;<br/> 
                        New Value Creation; <br/>
                        Fostering and Managing Innovation;<br/> 
                        and More!</h4>
                    
                    </div>
                </div>
            </div>
        </Slider>
    
}

export default Testimonials;