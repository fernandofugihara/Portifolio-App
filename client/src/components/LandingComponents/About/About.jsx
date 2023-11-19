import styled from "styled-components";
import avatar from "../../../assets/images/perfil.jpeg";
import Education from "./education";
import Interests from "./Interests";
import Technologies from "./Technologies";
import Goals from "./Goals";

const About = () => {

    return(
        <Wrapper id="about">
            <div className="content">
                <header className="">
                    <div className="about-image">
                        <img src={avatar} className="img" alt="" />
                        <h5>Fernando Fugihara</h5>
                        <a className="pdf" href="./curriculo.pdf" download>download resumé</a>
                    </div>
                    <div className="description">
                        <h3>Hi!</h3>
                        <p>
                            I'm currently studying electrical engineering at the 
                            <a target="_blank" className="link" href="https://www.unicamp.br/unicamp/"> University of Campinas </a>, and besides that i create websites.
                            Creating websites is more than a mere activity for me, it's a 
                            passion that allows me to breathe life into my ideas and share my 
                            knowledge in a visual and interactive way.
                        </p>
                        <hr />
                        <div className="middle-section">
                            <Education/>
                            <Interests/>
                            <Technologies/>
                            <Goals/>
                        </div>
                    </div>    
                </header>

            </div>

        </Wrapper>
    )
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 0 2rem;
        max-width: 1000px;
    }
    header {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 4rem;
        h5 {
            margin-top: 1rem;
        }
    }
    .pdf {
        margin-top: 1rem;
        border: 1px solid black;
        border-radius: 1rem;
        padding: 5px 10px;
        color: var(--text-color);
        background-color: var(--background-secondary-color);
    }
    .pdf:hover {
        background-color: var(--text-color);
        color: var(--background-secondary-color);
    }
    .description {
        .link {
            
            color: var(--primary-600);
        }
        p {
            text-align: start;
            display: inline-block;
            line-height: 1.5;
            margin-bottom: 1rem;
        }
    }
    .about-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    .img {
        width: 10rem;
        border-radius: 100%;
        border: 1px solid black;
        transition: 0.2s ease-in-out;
    }
    .img:hover {
        transform: scale(1.1);
    }
    .middle-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .interests {
        margin-top: 1rem;

    }
    .education {
        margin-top: 1rem;
    }
    @media (max-width: 700px) {
        margin-top: 20rem;
        header {
            grid-template-columns: 1fr;
        }
        .middle-section {
        grid-template-columns: 1fr;
    }
        .description p{
            text-align: justify;
        }
    }
`;

export default About;