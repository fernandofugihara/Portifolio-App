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
            <button className="btn little-nav-btn" onClick={toggleLittleNav}>
                nav
            </button>
            {showLittleNav && <LandingLinks onClick={toggleLittleNav}/>}
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
        position: fixed;
        color: var(--background-color);
        background-color: var(--text-color);
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