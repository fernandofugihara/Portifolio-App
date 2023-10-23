import styled from "styled-components";

const Contact = () => {
    return (
        <Wrapper id="contact">
            <div className="content">
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eius?
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



export default Contact;