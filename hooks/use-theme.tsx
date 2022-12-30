import { useEffect, useReducer } from "react";

type ThemeChoice = "dark" | "light";

type State = {
    theme: ThemeChoice | undefined;
}

type Action = {
    choice: ThemeChoice;
}

type Reducer = (state:State, action: Action) => State;

function reducer(state: State, action: Action) {
    const documentClassList = document.documentElement.classList;
    let value: State = {theme: undefined};
    if (action.choice === "dark") {
        documentClassList.remove("light");
        documentClassList.add("dark");
        localStorage.setItem("theme", "dark");
        value.theme = "dark";
    } else {
        documentClassList.remove("dark");
        documentClassList.add("light");
        localStorage.setItem("theme", "light");
        value.theme = "light";
    }

    return value;
}

// To use this hook theme must be initialized at _app
export default function useTheme() {
    const [{theme}, dispatch] = useReducer<Reducer>(reducer, { theme: undefined });
    useEffect(() => {
        const theme = document.documentElement.classList.contains("dark");
        if (theme) {
            dispatch({choice: "dark"});
        } else {
            dispatch({choice: "light"});
        }
    }, []);

    return {
        theme,
        setTheme: (theme: ThemeChoice) => dispatch({choice: theme})
    }
}