import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import {useInView} from "react-intersection-observer";

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

    return(
        <Wrapper id="work">
            <div className="content">
                <h1 ref={h1Ref} className={`${myElementIsVisible ? "animate" : "hide"}`}>Work</h1>
                <p ref={pRef}  className={`${pIsVisible ? "animate" : "hide"}`}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Quidem, voluptatibus!</p>
            </div>
        </Wrapper>    
    );
};

export default WorkSection;

const Wrapper = styled.section`
    overflow: hidden;
    height: 100vh;
    align-items: center;
    display: flex;
    justify-content: center;
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    p {
        margin-top: 0.2rem;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 1rem 0 0;
    }
    h1 {
        display: flex;
        position: relative;
        transform-origin: right;
        justify-content: center;
        min-width: 500px;
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