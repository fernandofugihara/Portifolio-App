import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import {AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin} from "react-icons/ai"

const Contact = () => {
    const {ref: h1Ref, inView: h1IsVisible} = useInView()
    const {ref: pRef, inView: pIsVisible} = useInView();
    const {ref: iconsRef, inView: iconsIsVisible} = useInView();

    return(
        <Wrapper id="contact">
            <div className="content">
                <h1 ref={h1Ref} className={`${h1IsVisible ? "animate" : "hide"}`}>Contact</h1>
                <p ref={pRef} className={`${pIsVisible ? "animate" : "hide"}`}>
                    Let's connect!
                </p>
                <div ref={iconsRef} className={`${iconsIsVisible ? "icons animate" : "hide"}`}>
                    <AiOutlineMail className="icon email"/>
                    <a href="https://wa.me/5511981003706" target="_blank">
                        <AiOutlineWhatsApp className="icon whatsapp"/>
                    </a>
                    <a href="https://www.linkedin.com/in/fernandofugihara/" target="_blank">
                        <AiFillLinkedin className="icon linkedin"/>
                    </a>
                </div>

            </div>

        </Wrapper>
    )
};

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
        margin-top: 1rem;
    }
    h1 {
        display: flex;
        justify-content: center;
    }
    .icons {
        margin-top: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .icon {
        color: var(--text-color);
        font-size: 4rem;
        transition: transform 1s;
        cursor: pointer;
    }

    .icon:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

`;



export default Contact;