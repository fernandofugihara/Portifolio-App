import styled from "styled-components";
import links from "../../utils/landingLinks"

const LandingLinks = ({onClick, showLittleNav}) => {
  return ( 
    <Wrapper>
        <div className={`${showLittleNav ? "content active" : "content"}`}>
        {links.map((link) => {
              const {text, path} = link;
              return <a onClick={onClick} className="nav-link" href={`#${path}`} key={text}>{text}</a>
          })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    position: fixed;
    display: inline-block;
    top: 3.5rem;
    z-index: 2;

    @media (max-width: 570px) {
      left: 22vw;
      top: 1rem;
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.75rem;
        transform: translateY(-300vw);
        transition: 0.4s;
      }
      .content.active {
        transform: translateY(1vh);
        
      }      
    }
    @media (min-width: 570px) {
        .content {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 3rem;
        gap: 1rem;
        transform: translateY(-200vh);
        transition: 0.4s;
        opacity: 0;
      }
      .content.active {
        transform: translateY(-2rem);
        opacity: 1;
      }      
    }
    

    .nav-link {
      color: var(--text-color);
      transition: var(--transition);
      font-size: 1rem;
      display: inline;
    }

    .nav-link:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
`;

export default LandingLinks;