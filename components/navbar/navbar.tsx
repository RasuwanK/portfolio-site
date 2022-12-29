import NavLink from "./nav-link";
import LightThemeButton from "../buttons/light-theme-button";
import DarkThemeButton from "../buttons/dark-theme-button";
import useTheme from "../../hooks/use-theme";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    
    return (
        <nav id="navbar" className="bg-redish-pink text-2xl font-semibold flex flex-row w-full items-center px-5 h-full">
            <div id="links" className="flex flex-row gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="">Contact</NavLink>
                <NavLink to="">Project</NavLink>
                <NavLink to="">Tech</NavLink>
            </div>
            <div id="theme-switcher-container" className="w-[50px] h-[50px] ml-auto">
                {theme === "dark" ? (
                    <>
                        <LightThemeButton switcher={() => {
                            setTheme("light");
                        }} />
                    </>
                ) : theme === "light" ? (
                    <>
                        <DarkThemeButton switcher={() => {
                            setTheme("dark");
                        }} />
                    </>
                ) : (<></>)}
            </div>
        </nav>
    )
}