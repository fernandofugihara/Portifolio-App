import styled from "styled-components";
import links from "../../utils/sidebarLinks";
import {NavLink} from "react-router-dom";
import { useUiContext } from "../../pages/HomeLayout";

const Navlinks = () => {

    const {toggleSidebar} = useUiContext();

  return (
    <Wrapper>
        {links.map((link) => {
            const {text, path, icon} = link;
            return (
                
                <NavLink
                to={path}
                key={text}
                className={({isActive}) => 
                (isActive ? "nav-link active" : "nav-link"
                )}
                onClick={toggleSidebar}
                
                >
                <div className="icon">
                    {icon}
                    {text}
                </div>
                </NavLink>
            )
        })}

    </Wrapper>
  );
};

export default Navlinks;

const Wrapper = styled.div`
    a {
        color: var(--text-color);
        font-size: 2.5rem;
        text-transform: capitalize;
    }
    .icon {
        display: flex;
        gap: .5rem;
        margin: 1rem;
    }

    .nav-link {
        display: block;
        transition: var(--transition);
    }

    .nav-link:hover {
        transform: scale(1.1);
        opacity: 0.7;
        
    }

    .active {
        color: var(--primary-500)
    }
`;