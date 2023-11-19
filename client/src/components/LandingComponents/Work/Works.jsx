import styled from 'styled-components';
import Work from './Work';
import links from '../../../utils/worksLinks';

const Works = () => {



  return (
    <Wrapper>
        <div className="works">
        {links.map((work) => {
            const {name, description, link} = work;
            return (
                <Work className="work" key={name} name={name} description={description} link={link}/>
            );
        })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 5rem 3rem 1rem;
    .works {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 1000px;
        gap: 2rem;
    }
    @media (max-width: 700px) {
        margin: 3.5rem 2rem 0;
        .works {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

`;

export default Works