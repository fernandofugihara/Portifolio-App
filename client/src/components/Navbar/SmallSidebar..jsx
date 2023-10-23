import styled from "styled-components";
import Navlinks from "./Navlinks";
import { useUiContext } from "../../pages/HomeLayout";

const SmallNavbar = () => {

  const {showSidebar} = useUiContext();
    

    return(
        <Wrapper>
            <div className={`${showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}`}>
                <div className="content">
                    <Navlinks/>
                </div>
            </div>
        </Wrapper>

    );
};

export default SmallNavbar;

const Wrapper = styled.nav`
  .sidebar-container {
    background-color: var(--background-secondary-color);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    transition: 1s;
  }
  .content {
    position: relative;
    background-color: var(--background-secondary-color);
    height: 100vh;
    width: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--border-radius);
    padding: 8rem 2rem;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--black);
    cursor: pointer;
  }



`;