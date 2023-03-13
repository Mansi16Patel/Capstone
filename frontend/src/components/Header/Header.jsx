import React from 'react'
import {Container, Row} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import './header.css';
import logo from '../../assets/images/logo.PNG';

const nav__links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/contactus',
        display:'Contact US'
    },
    {
        path:'/aboutus',
        display:'About Us'
    },
]


const Header = () => {
    return <header className="Header" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Container>
            <Row>
                <div className="nav__rapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo}/>
                        <span className='title'>The Big Leaf</span>
                    </div>
                   
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav__links.map((item,index)=>(
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={navClass=>navClass.isActive ? "active__link":""}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                   
                </div>

            </Row>
        </Container>
        
    </header>
}

export default Header;