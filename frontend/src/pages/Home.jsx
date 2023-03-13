import React from 'react'
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import home2 from '../styles/home2.jpg';
import home1 from '../styles/home1.png';
import home3 from '../styles/home3.jpg';
import Form1 from '../shared/Form1.jsx';
import Testimonials from '../components/Testimonial/Testimonials';

const Home = () => {
    return <>
        <section className='home'>
            <Container className='home1'>
                <Row>
                    <Col lg='6' >
                        <div className="hero__content">
                            <h3 className='quote'>Bussiness Consulting Firm </h3>
                            <p className='quote1'>A Boutique Consulting Firm that combines high ethical values with an enterpreneurial approach
                            to craft bold solutions. Our Strength is in our Experience, Expertise and Ethics</p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={home1} alt="image1"/>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-4" >
                            <img src={home2} alt="image2"/>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={home3} alt="image3"/>
                        </div>
                    </Col>
                    <Form1/>
                </Row>
            </Container>
        </section>

        {/*================= Testimonial Section start =================*/ }

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className='testimonial__title'>What we can do For you?</h2>
                    </Col>
                    <Col lg="12">
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section> 
        {/*================= Testimonial Section start =================*/ }          

    </>;
    
};

export default Home;