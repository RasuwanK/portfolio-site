import { ReactNode } from 'react';
import { Poppins } from '@next/font/google';
import Navbar from './navbar/navbar';

interface LayoutProps {
    children: ReactNode;
}

const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '800', "700"],
});

type ThemeChoice = "dark" | "light";

export default function Layout({ children }: LayoutProps) {

    return (
        // Holding the entire page layout (each page shares this layout)
        <div id="layout" className={`${poppinsFont.className}`}>
            <header id="header-content" className="fixed top-0 w-full h-[80px]">
                <Navbar />
            </header>
            <div id="page-holder" className="mt-[80px] bg-light-custard dark:bg-dark-blue">
                {children}
            </div>
            <footer id="footer-content"></footer>
        </div>
    )
}
