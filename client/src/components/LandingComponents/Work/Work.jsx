import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import sfugies from "../../../assets/images/sfugies.png";
import forAny1 from "../../../assets/images/4any1.png"
import jobify from "../../../assets/images/jobify.png"

const Work = ({name, description, link}) => {

const {ref: workRef, inView: isWorkVisible } = useInView();


  return (
    <Wrapper ref={workRef} className={`${isWorkVisible ? "animate" : "hide"}`}>
        <div className="content">
            <h5>{name}</h5>
            <div className="image-div">
                {name === "Study App" && <a target="_blank" href={link}><img src={sfugies} className="img" alt="" /></a>}
                {name === "4any1 Acessoria de Corrida" && <a target="_blank" href={link}><img src={forAny1} className="img" alt="" /></a>}
                {name === "Jobify" && <a target="_blank" href={link}><img src={jobify} className="img" alt="" /></a>}
                <p className="work-description">{description}</p>
                <a className="link" target="_blank" href={link}>See Project</a>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: var(--background-secondary-color);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    .content {
        z-index: -5;
    }

    h5 {
        padding: 1rem;
        text-align: center;
    }
    .work-description {
        position: absolute;
        top: 35%;
        opacity: 0;
        transition-delay: 0.2s;
        transition: 0.3s ease-in-out;
        color: var(--background-secondary-color);
        display: flex;
        justify-content: center;
    }

    .image-div {
        background-color: var(--text-color);
        z-index: -1;
        display: flex;
        justify-content: center;
    }

    .image-div:hover .work-description {
        opacity: 1;
    }

    .image-div:hover .img {
        opacity: 0;
    }

    .image-div:hover .link {
        opacity: 1;
    }

    .img {
        border: 2px solid black;
        transition: 0.3s ease-in-out;
    }
    .img:hover {
        opacity: 0;
    }


    .link{
        border: 1px solid var(--background-secondary-color);
        cursor: pointer;
        position: absolute;
        top: 70%;
        padding: 5px 10px;
        border-radius: 1rem;
        background-color: var(--text-color);
        color: var(--background-secondary-color);
        z-index: 12;
        transition: 0.3s ease-in-out;
        opacity: 0;
        display: flex;
    }

    .link:hover {
        background-color: var(--background-secondary-color);
        color:var(--text-color);
    }

    @media (max-width: 700px) {
        p {
            padding: 0 10px;
            text-align: justify;
            font-size: 1rem;
        }
    }
`

export default Work