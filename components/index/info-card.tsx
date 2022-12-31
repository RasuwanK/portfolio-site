interface InfoCardProps {
    left: JSX.Element;
    title: string;
    content: JSX.Element;
}

export default function InfoCard({
    left,
    title,
    content
}: InfoCardProps) {
    return (
        <section className="grid grid-rows-[150px_auto] h-auto sm:grid-cols-[150px_auto] sm:grid-rows-1 items-center justify-items-center md:justify-items-stretch gap-x-3 sm:gap-x-10 bg-dark-teal text-dark-black dark:text-light-white dark:bg-light-black w-full p-10 rounded-[12px]">
            <div id="logo-container" className="w-[150px] h-[150px]">
                {left}
            </div>
            <div id="description" className="w-full flex flex-col gap-3">
                <header>
                    <h3 className="text-center text-xl sm:text-2xl font-semibold">{title}</h3>
                </header>
                {content}
            </div>
        </section>
    )
}
