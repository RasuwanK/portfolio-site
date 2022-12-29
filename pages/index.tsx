import Head from 'next/head';
import GreetingMessage from '../components/index/greeting-message';
import Image from 'next/image';
import me from "../public/me.png";
import {
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import ContactLink from '../components/index/contact-link';

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
      </main>
    </>
  )
}
