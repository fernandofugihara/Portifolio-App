import styled from "styled-components";
import links from "../../utils/landingLinks"

const LandingLinks = ({onClick, showLittleNav}) => {
  return ( 
    <Wrapper>
      <div className={`${showLittleNav ? "content active" : "content"}`}>
      {links.map((link) => {
            const {text, path, order} = link;
            return <a onClick={onClick} className="nav-link" href={`#${path}`} key={text}>{text}</a>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    position: fixed;
    display: inline-block;
    top: 56px;
    z-index: 2;
    left: 2px;
    
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 9vh;
      width: 55vw;
      gap: 1rem;
      transform: translateY(-300%);
      transition: 1s;
    }
    .content.active {
      transform: translateY(-90%);
    }
    .nav-link {
      color: var(--text-color);
      transition: var(--transition);
      font-size: 1rem;
    }

    .nav-link:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
`;

export default LandingLinks;