import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-regular-svg-icons"

interface ThemeButtonProps {
    switcher: () => void;
}

export default function LightThemeButton({switcher}: ThemeButtonProps) {
    return (
        <button
            onClick={() => switcher()} 
            id="theme-switch" 
            className="w-full h-full p-2 drop-shadow-md text-light-blue bg-light-custard rounded-full border-2 border-light-blue"
        >
            <FontAwesomeIcon icon={faSun} />
        </button>
    )
}
