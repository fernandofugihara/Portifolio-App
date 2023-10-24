import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import {useInView} from "react-intersection-observer";
import Work from "./Work";

const WorkSection = () => {

    // const h1Ref = useRef();
    // const [myElementIsVisible, setMyElementIsVisible] = useState();
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         setMyElementIsVisible(entry.isIntersecting)
    //     });
    //     observer.observe(h1Ref.current)
    // }, []);

    const {ref: h1Ref, inView: myElementIsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();

    let verticalProgressBarHandler = () => {
        const totalScroll = document.documentElement.scrollTop - 405;
        const windowHeight = document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;
        const verticalProgressBar = document.getElementById("vertical-progress-bar");
        verticalProgressBar.style.transform = `scale(1, ${scroll})`;
        verticalProgressBar.style.opacity = `${scroll}`;
      };
  
      useEffect(() => {
          window.addEventListener("scroll", verticalProgressBarHandler);
      }, [])

    return(
        <Wrapper id="work">
            <div className="content">
                <h1 ref={h1Ref} className={`${myElementIsVisible ? "animate" : "hide"}`}>Work</h1>
                <p ref={pRef}  className={`${pIsVisible ? "animate" : "hide"}`}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Quidem, voluptatibus!
                </p>
                <div id="vertical-progress-bar-container">
                    <div id="vertical-progress-bar"></div>
                 </div>
            </div>
        </Wrapper>    
    );
};

export default WorkSection;

const Wrapper = styled.section`
    padding-top: 6rem;
    overflow: hidden;
    align-items: center;
    display: flex;
    justify-content: center;

    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    #vertical-progress-bar-container {
        position: absolute;
        background-color: white;
        z-index: 3;
        height: 100%;
        box-shadow: var(--shadow-1);
        position: relative;
        margin-top: 10rem;
    }
    #vertical-progress-bar {
        background: linear-gradient(180deg, var(--primary-500), var(--primary-800));
        transform-origin: top;
        transform: scale(0, 0);
        height: 100%;
    }
    #vertical-progress-bar-container,
    #vertical-progress-bar {
        width: 5px;
        border-radius: var(--border-radius);
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
    h1 {
        display: flex;
        position: relative;
        transform-origin: right;
        justify-content: center;
    }

    .animate {
        animation: left-to-right 1s forwards .2s;
        transform: scaleX(0);
        transform-origin: left;
    }

    .animate::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: black;
        animation: right-to-left 1s forwards 1s;
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