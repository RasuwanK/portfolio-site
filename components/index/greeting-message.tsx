import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake } from "@fortawesome/free-regular-svg-icons"

export default function GreetingMessage() {
    return (
        <article id="greeting-message" className="flex flex-row items-center gap-4">
            <div id="handshake-icon-container" className="w-[50px] h-[50px]">
                <FontAwesomeIcon icon={faHandshake} className="text-dark-black dark:text-light-white" />
            </div>
            <h1 className="font-bold text-3xl text-dark-black dark:text-light-white">Hello world</h1>
        </article>
    )
}
