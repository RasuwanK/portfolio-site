import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('Hi');
    console.log("loaded !");
    // Obtaining theme value from the localstorage
    const theme = localStorage.getItem("theme");
    console.log(theme);
    if (theme) {
      console.log("theme is not null");
      // If theme is available in the local storage then use it
      document.documentElement.classList.add(theme);
    } else {
      console.log("theme is null");
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log("query matched");
        // If not awailable then prefer system theme preference
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
