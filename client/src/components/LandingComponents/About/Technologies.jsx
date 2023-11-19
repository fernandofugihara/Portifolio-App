import styled from "styled-components";

const Technologies = () => {
    return (
        <Wrapper>
            <h4>Technologies</h4>
            <ol>
            (always learning)
                <li>  
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    React.js
                </li>
                <li>
                    Java
                </li>
            </ol>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h4{
        margin-top: 1rem;
        font-weight: 600;
    }
    ol{
        list-style: disc;
    }
    li {
        margin-top: 1rem;
    }
`;

export default Technologies;