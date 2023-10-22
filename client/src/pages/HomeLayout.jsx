import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SmallNavbar from "../components/Navbar/SmallSidebar.";
import { useContext, createContext, useState, useEffect } from "react";
import Loading from "../components/UI/Loading";

const uiContext = createContext();

const HomeLayout = () => {

    const [isInitializing, setIsInitializing] = useState(true);
    const [showLoadingAnimation, setShowLoadingAnimation] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    };

    useEffect(() => {
        setTimeout(() => {
            setShowLoadingAnimation(false)
        }, 2000)
    }, [])

    return (
        <uiContext.Provider value={{
            showSidebar,
            toggleSidebar
        }}>  
            <main>
                <Loading classes={showLoadingAnimation ? "loading-container" : "hide"}/>
                <SmallNavbar/>
                <Navbar/>
                <Outlet/>                
            </main>

        </uiContext.Provider>
    );
};

export default HomeLayout;

export const useUiContext = () => useContext(uiContext);