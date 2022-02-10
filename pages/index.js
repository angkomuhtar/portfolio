import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Layouts from "../components/main/Layouts";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Project from "../components/Project";

export default function Home() {
  const [wait, setWait] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 1500);
  }, []);

  if (wait) {
    return (
      <main className="flex h-screen items-center justify-center">
        <div className="h-36 w-36">
          <Image src="/logo.gif" height="400" width="400" />
        </div>
      </main>
    );
  }

  return (
    <Layouts>
      <Head>
        <title>Home </title>
      </Head>
      <div className="flex h-[calc(100vh-4.5rem)] flex-col justify-center">
        <p
          className="mb-5 text-md font-thin font-Fira text-main-100"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          Hi, my name is
        </p>
        <h1
          className="font-Asap text-[66px] font-extrabold leading-none tracking-tighter text-main-300"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          Mushawiruddin Muhtar.
        </h1>
        <h1
          className="font-Asap text-[66px] font-extrabold leading-none text-main-200"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          I build the web and mobile apps.
        </h1>
        <p
          className="mt-5 max-w-xl text-md font-thin font-Fira leading-loose text-main-100"
          data-aos="fade-down"
          data-aos-delay="850"
        >
          I’m a software engineer specializing in building User Interface (UI)
          for the website (HTML, CSS, ReactJs) and apps (React Native, Flutter).
        </p>
      </div>
      <About />
      <WorkExperience />
      <Project />
    </Layouts>
  );
}
