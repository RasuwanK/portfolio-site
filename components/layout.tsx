import { ReactNode, useEffect, useState } from 'react';
import { Poppins } from '@next/font/google';
import NavLink from './navbar/nav-link';
import useTheme from '../hooks/use-theme';
import DarkThemeButton from './buttons/dark-theme-button';
import LightThemeButton from './buttons/light-theme-button';

interface LayoutProps {
    children: ReactNode;
}

const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '800'],
});

type ThemeChoice = "dark" | "light";

export default function Layout({ children }: LayoutProps) {
    const { theme, setTheme } = useTheme();

    return (
        // Holding the entire page layout (each page shares this layout)
        <div id="layout" className={`${poppinsFont.className}`}>
            <header id="header-content">
                <nav id="navbar" className="bg-redish-pink text-2xl font-semibold flex flex-row w-full items-center px-5 h-[80px]">
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
            </header>
            <div id="page-holder">
                {children}
            </div>
            <footer id="footer-content"></footer>
        </div>
    )
}
