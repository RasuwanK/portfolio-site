import {useEffect, useState} from "react";

type ThemeChoice = "dark" | "light" | "loading";

// To use this hook theme must be initialized at _app
export default function useTheme() {
    const [theme, setTheme] = useState<ThemeChoice>("loading");

    useEffect(() => {
        setTheme(document.documentElement.classList[0] as ThemeChoice);
    }, []);

    useEffect(() => {
        const htmlClassList = document.documentElement.classList;
        if(theme === "dark") {
            htmlClassList.remove("light");
            htmlClassList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            htmlClassList.remove("dark");
            htmlClassList.add("light");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return {
        theme,
        setTheme,
    }
}