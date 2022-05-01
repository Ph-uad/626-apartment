import React,{useEffect, useRef} from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header1 from '../../Assets/img/header1.png';
import Button from '../UI/Button/Button'
import Classes from './header.module.css';
import gsap from 'gsap';

const Header = (props) => {

    let header,cloudImg = useRef();

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(cloudImg, {
            scrollTrigger:{trigger : header,start: "top top",toggleActions: "restart pause reverse pause",scrub: 1,},
            x:2000,
            y:100,
            duration: 5
        })
    },[cloudImg, header])
    
    return (
        <header ref={header} className={Classes["heading"]}>
            <div className={Classes['heading-images']}>
                <img src={Header1} ref={(el)=>{cloudImg = el}} className={Classes["heading-image1"]} alt="Header" />
            </div>
            <div className={Classes["heading-text"]} >
                <h1 className="heading-primary">Otter's Homes</h1>
                <h3 className="heading-tertiary">Starting at $150.00/night</h3>
                <h3 className="heading-tertiary">or $320,000/year</h3>
                <Button className={Classes.button}><a href="#apartment" className="link">Take a Tour</a> </Button>
            </div>
        </header>
    );
};
export default Header;