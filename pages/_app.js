import "@/styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 200,
      mirror: true,
    });
  }, []);
  return <Component {...pageProps} />;
}
