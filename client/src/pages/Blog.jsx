import styled from "styled-components";

const Blog = () => {
    return (
        <Wrapper>
            <div className="content">
                <h1>Blog</h1>
            </div>
        </Wrapper>
    );
};

export default Blog

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;