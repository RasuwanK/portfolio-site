import { useEffect, useState } from "react";

type ThemeChoice = "dark" | "light";

// To use this hook theme must be initialized at _app
export default function useTheme() {
    const [theme, setTheme] = useState<ThemeChoice | undefined>(undefined);
    useEffect(() => {
        const theme = document.documentElement.classList.contains("dark");
        if (theme) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    return {
        theme,
        setTheme: (isDark: boolean) => {
            const documentClassList = document.documentElement.classList;
            if (isDark) {
                setTheme("dark");
                documentClassList.remove("light");
                documentClassList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                setTheme("light");
                documentClassList.remove("dark");
                documentClassList.add("light");
                localStorage.setItem("theme", "light");
            }
        },
    }
}