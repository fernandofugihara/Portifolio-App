import styled from "styled-components";
import { WorkSection, Experience, About, Contact } from "../components/LandingComponents";
import {useInView} from "react-intersection-observer";
import LandingLinks from "../components/Navbar/LandingLinks";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const LandingPage = () => {

    const {ref: h1Ref, inView: h1IsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const [showLittleNav, setShowLittleNav] = useState(false);

    const toggleLittleNav = () => {
        setShowLittleNav(!showLittleNav);
    };
    
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.transform = `scale(${scroll}, 1)`;
      progressBar.style.opacity = `${scroll}`;
    };

    useEffect(() => {
        window.addEventListener("scroll", progressBarHandler);
    }, [])

    return (
        <Wrapper>
            <div id="progress-bar-container">
                <div id="progress-bar"></div>
            </div>

            <button onClick={toggleLittleNav} className={`${showLittleNav ? " little-nav-btn active" : "little-nav-btn"}`} aria-controls="primary-navigation" aria-expanded={showLittleNav}>
            <svg stroke='var(--button-color)' className='hamburguer' viewBox='0 0 100 100' width="30">
            <line 
              className="line extra"
              x1="10" x2="90"
              y1="30" y2="30"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            >
            </line>
            <line 
              className="line top"
              x1="90" x2="10"
              y1="50" y2="50"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            >
            </line>
            
            <line 
              className="line bottom"
              x1="10" x2="90"
              y1="70" y2="70"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            >
            </line>

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
    #progress-bar-container {
        position: fixed;
        z-index: 1;
        background-color: white;
        width: 100%;
        top: 0;
        left: 0;
        box-shadow: var(--shadow-1)
    }
    #progress-bar {
        background-color: black;
        transform-origin: top left;
        transform: scale(0,0);
        opacity: 0;
        width: 100%;
    }
    #progress-bar-container,
    #progress-bar {
        height: 10px;
    }
    .little-nav-btn {
        top: 5px;
        padding: 5px;
        left: 15px;
        --button-color: var(--text-color);
        border-radius: 50%;
        background: var(--background-secondary-color);
        position: fixed;
        cursor: pointer;
        transition: transform 1s;
        box-shadow: var(--shadow-2);
        z-index: 3;
        border: transparent;
    }

    @media (max-width: 992px) {
        .little-nav-btn.active {
            transform: translateX(53vw);
        }
    }
    @media (max-width: 600px) {
    .little-nav-btn.active {
            transform: translateX(40vw);
        }
    }
    @media (min-width: 992px){
        .little-nav-btn.active {
            transform: translateX(43vw);
        }   
    }

    // backwards animation
    .little-nav-btn {
      --button-color: var(--text-color)
    }

    .little-nav-btn .line {
      animation: to-open-icon 1s forwards;
      transition: all 1s;
    }

    .little-nav-btn.active .line {
      animation: to-close-icon 1s forwards;
    }

    .little-nav-btn.active .line.extra {
        opacity: 0;
    }

    .little-nav-btn .line.top {
      --rotation: -45deg;
      transform-origin: 65px;
    }
    .little-nav-btn .line.bottom{
      --rotation: 45deg;
      transform-origin: 59px 59px;
    }

    @keyframes to-close-icon{
      0% {
        stroke-dashoffset: 0;
      }
      40% {
        stroke-dashoffset: 79.9;
      }
      60% {
        stroke-dashoffset: 79.9; rotate: var(--rotation);
      }
      100% {
        stroke-dashoffset: 0; rotate: var(--rotation);
      }
    }
    @keyframes to-open-icon{
      0% {
        stroke-dashoffset: 0; rotate: var(--rotation);
      }
      40% {
        stroke-dashoffset: 79.9; rotate: var(--rotation);
      }
      60% {
        stroke-dashoffset: 79.9; ;
      }
      100% {
        stroke-dashoffset: 0;
      } 
    }

    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        top: 0;
    }

    h1 {
        display: flex;
        justify-content: center;
        padding: 4px;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    p {
        margin-top: 0.2rem;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 1rem 0 0;
        text-align: center;
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