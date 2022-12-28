import { ReactNode } from 'react';
import { Poppins } from '@next/font/google';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLink from './navbar/nav-link';

interface LayoutProps {
    children: ReactNode;
}

const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '800'],
});

export default function Layout({ children }: LayoutProps) {
    return (
        // Holding the entire page layout (each page shares this layout)
        <div id="layout" className={`${poppinsFont.className}`}>
            <header id="header-content">
                <nav id="navbar" className="bg-redish-pink text-2xl font-semibold flex flex-row w-full items-center p-4">
                    <div id="links" className="flex flex-row gap-5">
                       <NavLink to="/">Home</NavLink>
                       <NavLink to="">Contact</NavLink>
                       <NavLink to="">Project</NavLink>
                       <NavLink to="">Tech</NavLink>
                    </div>
                    <div id="theme-switcher-container">
                        <button id="theme-switch"></button>
                    </div>
                </nav>
            </header>
            <div id="page-holder">
                {children}
            </div>
            <footer></footer>
        </div>
    )
}
