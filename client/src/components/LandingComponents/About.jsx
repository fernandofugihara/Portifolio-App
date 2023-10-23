import styled from "styled-components";

const About = () => {
    return(
        <Wrapper id="about">
            <div className="content">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, unde!
                </p>
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
        display: block;
    }

`;

export default About;