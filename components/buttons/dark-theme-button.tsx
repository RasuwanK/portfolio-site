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
            className="w-full h-full p-2 drop-shadow-md text-light-white bg-dark-black rounded-full"
        >
            <FontAwesomeIcon icon={faMoon} />
        </button>
    )
}
