import styled from "styled-components";
import { WorkSection, Experience, About, Contact } from "../components/LandingComponents";
import {useInView} from "react-intersection-observer";
import LandingLinks from "../components/Navbar/LandingLinks";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {

    const {ref: h1Ref, inView: h1IsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const {ref: logoRef, inView: logoIsVisible} = useInView();
    const [showLittleNav, setShowLittleNav] = useState(true);

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

            <span onClick={toggleLittleNav} className={`${showLittleNav ? " left-container-arrow1 active" : "left-container-arrow1"}`} aria-controls="primary-navigation" aria-expanded={showLittleNav}></span>
            
            <LandingLinks showLittleNav={showLittleNav} onClick={toggleLittleNav}/>
            <div id="home" className="home">
                <div className="first-page">
                    <h1 ref={h1Ref} className={`${h1IsVisible ? "animate-name" : "hide"}`}>Fernando Fugihara</h1>
                    <p ref={pRef} className={`${pIsVisible ? "animate-name" : "hide"}`}>
                        I build interactive websites that run 
                        across plataforms and devices
                    </p>
                </div>
            </div>
            <WorkSection/>
            <About/>
            <Experience/>
            <Contact/>
        </Wrapper>
    );
};

export default LandingPage;

const Wrapper = styled.div`

  .left-container-arrow1 {
      position: fixed;
      height: 0;
      width: 0;
      cursor: pointer;
      top: 15px;
      z-index: 1;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 20px solid var(--text-color);
      transition: all 0.3s;
      animation: pump 1s ease-in-out forwards infinite;

  }

  @keyframes pump {
    0% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translate(3px);
    }
  }

  .left-container-arrow1:hover {
    transform: scale(1.4);
  }

  .left-container-arrow1.active {
    rotate: 180deg;
    padding-left: 1rem;
    animation: super-pump 0.7s forwards infinite;
  }

  @keyframes super-pump {
    0% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translate(5px);
    }
  }


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
        height: 2px;
    }

    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        top: 0;
        margin-bottom: 10rem;
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
        opacity: 0;
    }

    .animate {
        animation: left-to-right 0.5s forwards 0.5s;
        transform: scaleX(0);
        transform-origin: left;
    }

    .animate::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--text-color);
        animation: right-to-left 0.5s forwards 1s;
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

    .animate-name {
      animation: small-to-big 3s forwards;
      transform: scale(0);
      transform-origin: center;
    }

    @keyframes small-to-big {
      100% {
        transform: scale(1);
      }
    }

    .logo {
      position: fixed;
      font-size: 2em;
      top: 0.9rem;
      left: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      z-index: 5;
    }

    .animate2{
      visibility: visible;
      opacity: 1;
    }

`;