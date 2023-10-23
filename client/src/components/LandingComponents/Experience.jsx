import styled from "styled-components";

const Experience = () => {
    return (
        <Wrapper id="experience">
            <div className="content">
                <h1>Experience</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, molestias.
                </p>
            </div>
        </Wrapper>
    );
};

export default Experience;

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
