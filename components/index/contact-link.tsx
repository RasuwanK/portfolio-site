import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactLinkProps {
    link: string;
    name: string;
    icon: any;
}

export default function ContactLink({link, name, icon}: ContactLinkProps) {
    return (
        <a
            href={link}
            className="border-4 dark:border-light-white border-dark-black rounded-[12px] p-10 w-[200px] h-[200px] flex flex-col gap-2 items-center"
        >
            <div id="icon" className="w-[100px] h-[100px]">
                <FontAwesomeIcon icon={icon} className="dark:text-light-white text-dark-black w-full" />
            </div>
            <div id="text" className="text-dark-black dark:text-light-white text-xl">
                {name}
            </div>
        </a>
    )
}
