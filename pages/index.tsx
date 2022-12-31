import Head from 'next/head';
import GreetingMessage from '../components/index/greeting-message';
import Image from 'next/image';
import me from "../public/me.png";
import digitalPin from "../public/pin-student.jpg";
import {
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import ContactLink from '../components/index/contact-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoCard from '../components/index/info-card';

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
            <h1 className="text-3xl sm:text-4xl text-center font-bold text-dark-black dark:text-light-white">Contact me</h1>
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
        <article className="w-[95%] sm:w-[80%] lg:w-[60%] flex flex-col gap-3">
          <header className="w-full">
            <h1 className="text-3xl sm:text-4xl text-center text-dark-black dark:text-light-white font-bold">Projects</h1>
          </header>
          <InfoCard
            left={
              <div id="logo-container" className="w-[150px] h-[150px]">
                <FontAwesomeIcon icon={faGithub} className="text-dark-black dark:text-light-white" />
              </div>
            }
            title="Looking for projects"
            content={
              <>
                <p className="dark:text-light-white text-center">If you are looking for projects visit my <a href="https://github.com/RasuwanK" className="hover:underline"><strong>github profile</strong></a>.</p>
                <p className="dark:text-light-white text-center">There {`you'll`} find their source code and demo</p>
                <a
                  href="https://github.com/RasuwanK"
                  className="text-center font-semibold dark:text-light-white hover:underline"
                >
                  Visit my profile
                </a>
              </>
            }
          />
          <InfoCard
            left={
              <div id="logo-container" className="w-[150px] h-[150px]">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
            }
            title="Looking to get some work done"
            content={
              <>
                <p className="text-center">If you want to have a fully working web app with latest tech and reasonable price</p>
                <p className="text-center">Then <a
                  href="https://github.com/RasuwanK"
                  className="text-center hover:underline"
                >
                  <strong>visit my fiverr account.</strong>
                </a></p>
                <p className="text-center">Or else if you want to get some work done by directly communicating me then email me at {` `}
                  <a
                    href="mailto:kalharaweragala@gmail.com"
                    className="text-center hover:underline"
                  >
                    <strong>kalharaweragala@gmail.com</strong>
                  </a></p>
              </>
            }
          />
        </article>
        <article className="w-[95%] sm:w-[80%] lg:w-[60%] flex flex-col gap-3">
          <header>
            <h1 className="text-3xl sm:text-4xl text-center text-dark-black dark:text-light-white font-bold">Qualifications</h1>
          </header>
          <InfoCard
            left={
              <data value="995113794">
                <Image
                  alt="My BCS digital pin badge"
                  width={150}
                  height={150}
                  src={digitalPin}
                />
              </data>
            }
            title="I'm a member of British Computer Society since 2022"
            content={
              <p className="text-center">Membership id: <data value="995113794">995113794</data></p>
            }
          />
        </article>
      </main>
    </>
  )
}
