import styled from "styled-components";
import { WorkSection, Experience, About, Contact } from "../components/LandingComponents";
import {useInView} from "react-intersection-observer";
import LandingLinks from "../components/Navbar/LandingLinks";
import { useState } from "react";

const LandingPage = () => {

    const {ref: h1Ref, inView: h1IsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const [showLittleNav, setShowLittleNav] = useState(false);

    const toggleLittleNav = () => {
        setShowLittleNav(!showLittleNav);
    }

    return (
        <Wrapper>
            <button onClick={toggleLittleNav} className={`${showLittleNav ? " little-nav-btn active" : "little-nav-btn"}`} aria-controls="primary-navigation" aria-expanded={showLittleNav}>
            <svg fill='var(--button-color)' className='hamburguer' viewBox='0 0 100 100' width="30">
                <rect 
                className='line top' 
                width="60" 
                height="7"
                x="20"
                y="25"
                rx="5"
                >
                </rect>
                <rect 
                className='line middle' 
                width="60" 
                height="7"
                x="20"
                y="45"
                rx="5"
                >
                </rect>
                <rect 
                className='line bottom' 
                width="60" 
                height="7"
                x="20"
                y="65"
                rx="5"
                >
                </rect>
            </svg>
            </button>
            <LandingLinks showLittleNav={showLittleNav} onClick={toggleLittleNav}/>
            <div id="home" className="home">
                <div className="first-page">
                    <h1 ref={h1Ref} className={`${h1IsVisible ? "animate" : "hide"}`}>Fernando Fugihara</h1>
                    <p ref={pRef} className={`${pIsVisible ? "animate" : "hide"}`}>
                        I build interactive websites that run 
                        across plataforms and devices
                    </p>
                </div>
            </div>
            <WorkSection/>
            <Experience/>
            <About/>
            <Contact/>
        </Wrapper>
    );
};

export default LandingPage;

const Wrapper = styled.div`

    .little-nav-btn {
        top: 12px;
        left: 15px;
        --button-color: var(--text-color);
        background: var(--background-secondary-color);
        position: fixed;
        border-radius: 100%;
        cursor: pointer;
        transition: transform 1s;
        box-shadow: var(--shadow-2);
    }

    .little-nav-btn.active {
        transform: translateX(1100%);
    }

    // backwards animation
    .little-nav-btn .line {
      transition:
        y 300ms ease-in 300ms,
        rotate 300ms ease-in,
        opacity 0ms 300ms;
      ;
      transform-origin: center;
      
    }

    .little-nav-btn.active .line {
      transition:
        y 300ms ease-in,
        rotate 300ms ease-in 300ms,
        opacity 0ms 300ms;
      ;
    }


    .little-nav-btn.active .top {
      y: 45;
      rotate: 45deg;
    }

    .little-nav-btn.active .bottom {
      y: 45;
      rotate: -45deg
    }

    .little-nav-btn.active .middle {
      opacity: 0;
    }

    .home {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
    h1 {
        display: flex;
        justify-content: center;
        padding: 4px;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    p {
        padding-bottom: 3px;
    }

    .hide {
        visibility: hidden;
    }

    .animate {
        animation: left-to-right 1s forwards 1s;
        transform: scaleX(0);
        transform-origin: left;
    }

    .animate::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--text-color);
        animation: right-to-left 1s forwards 2s;
        transform: scaleX(1);
        transform-origin: right;
    }

    @keyframes left-to-right {
        100% {
            transform: scaleX(1);
        }

    }

    @keyframes right-to-left {
        100% {
            transform: scaleX(0);
        }
    }


`;