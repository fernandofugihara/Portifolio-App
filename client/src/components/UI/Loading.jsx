import styled from "styled-components";

const Loading = ({classes}) => {
    return (
        <Wrapper>
            <div className={`loading-container ${classes}`}>
                <h1>Loading...</h1>
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    .loading-container {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: var(--background-secondary-color);
        z-index: 100000000;
        transition: 1s;
    }

    .loading-container.active {
        opacity: 1;
        visibility: visible;
    }
    .loading-container.hide {
        opacity: 0;
        visibility: hidden;
    }
`;

export default Loading;

