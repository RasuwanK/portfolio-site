import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('Hi');
    const themeCallback = () => {
      console.log("loaded !");
      // Obtaining theme value from the localstorage
      const theme = localStorage.getItem("theme");
      if(theme) {
        // If theme is available in the local storage then use it
        document.documentElement.classList.add(theme);
      } else {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // If not awailable then prefer system theme preference
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
        } else {
          localStorage.setItem("theme", "light");
          document.documentElement.classList.add("light");
        }
      }
    } 
  
    // Theme is applied after the body is loaded
    window.addEventListener("load", themeCallback);

    return () => {
      // Cleaning the event listener
      window.removeEventListener("load", themeCallback);
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
