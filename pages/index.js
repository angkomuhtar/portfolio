import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Layouts from "../components/main/Layouts";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  const [wait, setWait] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 3000);
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
      <div
        data-aos="fade-up"
        className="flex h-[calc(100vh-4.5rem)] flex-col justify-center px-10"
      >
        <p className="mb-5 text-md font-thin font-Fira text-main-100">
          Hi, my name is
        </p>
        <h1 className="font-Asap text-[66px] font-extrabold leading-none tracking-tighter text-main-300">
          Mushawiruddin Muhtar.
        </h1>
        <h1 className="font-Asap text-[66px] font-extrabold leading-none text-main-200">
          I build the web and mobile apps.
        </h1>
        <p className="mt-5 max-w-xl text-md font-thin font-Fira leading-loose text-main-100">
          I’m a software engineer specializing in building User Interface (UI)
          for the website (HTML, CSS, ReactJs) and apps (React Native, Flutter).
        </p>
      </div>
      <About />
      <WorkExperience />
    </Layouts>
  );
}
