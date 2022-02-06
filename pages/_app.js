import { useEffect } from "react";
import "../styles/index.scss";
import Aos from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      ease: "ease-in-out",
      // once: true,
      // mirror: true,
    });
  }, []);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@400;500;600;700&family=Fira+Code:wght@300;400;500;600;700&family=Red+Hat+Display:wght@300;400;500;600;700;800&family=Red+Rose:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
