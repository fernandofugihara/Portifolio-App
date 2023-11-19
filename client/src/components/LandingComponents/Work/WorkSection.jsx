import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import {useInView} from "react-intersection-observer";
import Works from "./Works";

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
    const {ref: progressBarRef, inView: progressIsVisible} = useInView();

    // let verticalProgressBarHandler = () => {
    //     const totalScroll = document.documentElement.scrollTop - 1000;
    //     const windowHeight = document.documentElement.clientHeight;
    //     const scroll = `${totalScroll / windowHeight}`;
    //     const verticalProgressBar = document.getElementById("vertical-progress-bar");
    //     verticalProgressBar.style.transform = `scale(1, ${scroll})`;
    //     verticalProgressBar.style.opacity = `${scroll}`;
    //   };
  
    //   useEffect(() => {
    //       window.addEventListener("scroll", verticalProgressBarHandler);
    //   }, [])

    return(
        <Wrapper id="work">
                <div className="content">
                <h1 ref={h1Ref} className={`${myElementIsVisible ? "animate" : "hide"}`}>Work</h1>
                <p ref={pRef}  className={`${pIsVisible ? "animate" : "hide"}`}>
                    Take a look at some of my recent projects.
                </p>
                {/* <div ref={progressBarRef} id="vertical-progress-bar-container" className={`${progressIsVisible ? "animate" : "hide"}`}>
                    <div id="vertical-progress-bar"></div>
                </div> */}
            </div>
            <Works/>
        </Wrapper>    
    );
};

export default WorkSection;

const Wrapper = styled.section`
    overflow: hidden;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
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
        justify-content: center;
    }
    @media (max-width: 700px) {
        .content {
            margin: 0;
        }
    }
`;