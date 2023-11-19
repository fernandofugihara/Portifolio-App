import styled from "styled-components";

const Education = () => {
    return (
        <Wrapper>
            <h4>Education</h4>
            <ol>
                <li>  
                    bachelor's degree in electrical engineering (in progress)
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

export default Education;