import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"

interface ThemeButtonProps {
    switcher: () => void;
}

export default function DarkThemeButton({switcher}: ThemeButtonProps) {
    return (
        <button
            onClick={() => switcher()}
            id="theme-switch" 
            className="w-full h-full p-2 drop-shadow-md text-light-custard bg-light-blue rounded-full border-2 border-light-custard"
        >
            <FontAwesomeIcon icon={faMoon} />
        </button>
    )
}
