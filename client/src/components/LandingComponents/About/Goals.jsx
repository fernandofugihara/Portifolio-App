import styled from "styled-components";

const Goals = () => {
    return (
        <Wrapper>
            <h4>Professional Goals</h4>
            <ol>
                <li>  
                    
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

export default Goals;