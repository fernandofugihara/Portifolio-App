import styled from "styled-components";
import links from "../../utils/landingLinks"

const LandingLinks = ({onClick}) => {
  return ( 
    <Wrapper>
      <div className="content">
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
    background-color:var(--background-secondary-color);
    top: 50px;
    z-index: 2;
    left: 2px;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .nav-link {
      color: var(--text-color);
      transition: var(--transition);
    }

    .nav-link:hover {
      opacity: 0.6;
    }
`;

export default LandingLinks;