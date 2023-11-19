import styled from "styled-components";

const Interests = () => {
    return (
        <Wrapper>
            <h4>Interests</h4>
            <ol>
                <li>  
                    Programming
                </li>
                <li>
                    Learning new things
                </li>
                <li>
                    Workout
                </li>
                <li>
                    Playing the guitar
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

export default Interests;