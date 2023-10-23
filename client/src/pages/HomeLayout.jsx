import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SmallNavbar from "../components/Navbar/SmallSidebar.";
import { useContext, createContext, useState, useEffect } from "react";
import Loading from "../components/UI/Loading";
import { checkDefaultTheme } from "../App";

const uiContext = createContext();

const HomeLayout = () => {

    const [showLoadingAnimation, setShowLoadingAnimation] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle("dark-theme", isDarkTheme);
        localStorage.setItem("darkTheme", newDarkTheme);
    };


    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    };

    useEffect(() => {
        setTimeout(() => {
            setShowLoadingAnimation(false)
        }, 1000)
    }, [])

    return (
        <uiContext.Provider value={{
            showSidebar,
            toggleSidebar,
            isDarkTheme,
            toggleDarkTheme
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