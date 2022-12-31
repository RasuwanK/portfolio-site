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
            <header id="header-content" className="z-10 fixed top-0 w-full h-[80px]">
                <Navbar />
            </header>
            <div id="page-holder" className="mt-[80px] pb-10 z-0 bg-light-white dark:bg-dark-black">
                {children}
            </div>
            <footer id="footer-content" className="py-10 bg-dark-teal dark:bg-light-black p-4 flex flex-col items-center text-dark-black dark:text-light-white">
                <span>Copyright (C) Rasuwan Kalhara</span>
            </footer>
        </div>
    )
}
