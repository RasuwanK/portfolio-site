import Head from 'next/head';
import GreetingMessage from '../components/index/greeting-message';
import Image from 'next/image';
import me from "../public/me.png";
import screenshotWeatherApp from "../public/weather-app-snap.png";
import {
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faDesktop
} from "@fortawesome/free-solid-svg-icons";
import ContactLink from '../components/index/contact-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Hello I'm Rasuwan Kalhara this is my portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full items-center gap-5">
        <GreetingMessage />
        <article
          id="about-me-article"
          className="w-[80%] flex flex-row items-center gap-20 justify-center"
        >
          <section id="image">
            <figure className="w-[270px] h-[270px]">
              <Image
                src={me}
                width={270}
                height={270}
                placeholder="blur"
                className="rounded-full drop-shadow-md border w-full h-full border-dark-black dark:border-light-white"
                alt="Picture of Rasuwan Kalhara"
              />
            </figure>
          </section>
          <section id="description" className="flex flex-col gap-1">
            <p className="font-semibold text-4xl text-dark-black dark:text-light-white"><b>{`I'm Rasuwan Kalhara`}</b></p>
            <p className="text-3xl text-dark-black dark:text-light-white">A passionate web developer</p>
          </section>
        </article>
        <article id="contact-list" className="w-[80%] flex flex-col items-center">
          <header className="w-full">
            <h1 className="text-4xl text-center font-bold text-dark-black dark:text-light-white">Contact me</h1>
          </header>
          <ul className="flex flex-row items-center gap-5 flex-wrap justify-center w-full">
            <li className="flex flex-col items-stretch">
              <ContactLink
                link="https://twitter.com/RasuwanK"
                name="Twitter"
                icon={faTwitter}
              />
            </li>
            <li>
              <ContactLink
                link="https://github.com/RasuwanK"
                name="Github"
                icon={faGithub}
              />
            </li>
            <li>
              <ContactLink
                link="tel:+94705085269"
                name="Phone"
                icon={faPhone}
              />
            </li>
            <li>
              <ContactLink
                link="mailto:kalharaweragala@gmail.com"
                name="Email"
                icon={faEnvelope}
              />
            </li>
          </ul>
        </article>
        <article id="projects" className="w-[80%] drop-shadow-md grid grid-rows-10%-auto gap-10 bg-dark-teal dark:bg-light-black py-10 px-5 rounded-[12px] h-[500px]">
          <header className="w-full">
            <h1 className="text-4xl text-center font-bold text-dark-black dark:text-light-white">Projects</h1>
          </header>
          <section id="projects-data" className="grid grid-cols-1-to-2-400 gap-2 py-4 w-full h-full">
            <aside id="project-list" className='w-full h-full rounded-[12px] py-5 border-2 border-greenish dark:border-dark-black'>
              <ul className="flex flex-col items-center">
                <li id="project-item" className="w-[95%]">
                  <button className="w-full p-2 text-center rounded-[5px] bg-greenish dark:bg-dark-black text-light-white">
                    <cite className="not-italic">The weather station</cite>
                  </button>
                </li>
              </ul>
            </aside>
            <article className="flex flex-col gap-4 items-center overflow-y-scroll py-5 border-2 border-greenish dark:border-dark-black rounded-[10px]">
              <header className="w-[80%]">
                <h3 className="text-2xl text-center font-bold dark:text-light-white text-dark-black">The weather station</h3>
              </header>
              <figure className="w-[80%] flex flex-col items-center gap-3">
                <Image
                  src={screenshotWeatherApp}
                  alt="Screenshot of weather app"
                  width={400}
                  className="rounded-[5px]"
                />
                <figcaption className="text-dark-black dark:text-light-white">Screenshot of the weather station</figcaption>
              </figure>
              <p id="project-description" className="w-[80%] text-center text-dark-black dark:text-light-white">This app determines your current live location and  provides you the accurate weather based on that location. A user can obtain current temperature , humidity, and also air pollution.</p>
            </article>
          </section>
        </article>
      </main>
    </>
  )
}
