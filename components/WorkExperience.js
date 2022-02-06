import React, { useState } from "react";
import List from "./List";
import Text from "./Text";

export const WorkExperience = () => {
  const work = [
    {
      id: 1,
      company: "CV. Avila Media Karya",
      location: "Makassar, Indonesia",
      time: "Jan - Oct 2021",
      job: "Frontend Developer",
      desc: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam at error itaque beatae rem esse id sunt autem nihil, iure veniam, explicabo ducimus necessitatibus officiis eligendi tempore ipsum architecto repellat!",
      ],
      tech: ["ReactJs", "Tailwindcss", "Laravel"],
    },
    {
      id: 2,
      company: "PT. Telekomunikasi Seluler",
      location: "Makassar, Indonesia",
      time: "Dec 2019 - Mar 2021",
      job: "Admin Technical Support",
      desc: [
        "collect and process Telkomsel provider customer data from the database into a report for the purpose of increasing sales",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam at error itaque beatae rem esse id sunt autem nihil, iure veniam, explicabo ducimus necessitatibus officiis eligendi tempore ipsum architecto repellat!",
      ],
      tech: [],
    },
    {
      id: 3,
      company: "CV. Manre Nex Ekspresi",
      location: "Makassar, Indonesia",
      time: "Jun 2020 - Dec 2020",
      job: "React Native Developer",
      desc: [
        "Build a Online Food Reservation Mobile Apps Using React Native",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam at error itaque beatae rem esse id sunt autem nihil, iure veniam, explicabo ducimus necessitatibus officiis eligendi tempore ipsum architecto repellat!",
      ],
      tech: ["React Native"],
    },
    {
      id: 4,
      company: "BKPSDM Jeneponto",
      location: "Makassar, Indonesia",
      time: "Apr 2018 - Sep 2019",
      job: "Fullstack Web Developer",
      desc: [
        "build and maintain web monitoring and calculation of employee performance allowances within the government of Jeneponto ",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam at error itaque beatae rem esse id sunt autem nihil, iure veniam, explicabo ducimus necessitatibus officiis eligendi tempore ipsum architecto repellat!",
      ],
      tech: ["PHP", "HTML", "CSS", "Laravel"],
    },
    {
      id: 5,
      company: "PT. Amanah Bersama Ummat",
      location: "Makassar, Indonesia",
      time: "Mar 2016 - Aug 2017",
      job: "Fullstack Web Developer",
      desc: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam at error itaque beatae rem esse id sunt autem nihil, iure veniam, explicabo ducimus necessitatibus officiis eligendi tempore ipsum architecto repellat!",
      ],
      tech: ["PHP", "HTML", "CSS", "Laravel"],
    },
  ];
  const [selected, setSelected] = useState(0);
  const [target, setTarget] = useState(1);
  return (
    <div>
      <div className="mx-auto max-w-4xl py-28">
        <style jsx>{`
          #indicator {
            top: ${selected * 56}px;
          }
        `}</style>
        <div className="flex w-full items-center space-x-5">
          <svg
            className="h-10 w-10 text-main-200"
            viewBox="0 0 48 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42 22C42 26.6271 40.3956 31.1111 37.4602 34.6879C34.5248 38.2647 30.44 40.713 25.9018 41.6157C21.3636 42.5184 16.6528 41.8197 12.5721 39.6385C8.49133 37.4573 5.29313 33.9286 3.52242 29.6537C1.7517 25.3788 1.51802 20.6222 2.8612 16.1943C4.20438 11.7665 7.0413 7.94132 10.8886 5.37064C14.7359 2.79996 19.3555 1.6428 23.9603 2.09634C28.5652 2.54987 32.8703 4.58604 36.1421 7.85789M42 22L36.1421 27M42 22L46.5 27"
              stroke="currentcolor"
              strokeWidth="3"
            />
            <circle cx="24.9054" cy="18.7247" r="1.72471" fill="currentcolor" />
            <path
              d="M24.8889 20.6112C23.8054 20.6112 22.7662 21.1308 22.0001 22.0557L27.7778 22.0557C27.0117 21.1308 25.9725 20.6112 24.8889 20.6112Z"
              fill="currentcolor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.2221 23C19.582 23 19.1067 23.593 19.2461 24.2177L20.0899 28H30.1293L30.9732 24.2177C31.1125 23.593 30.6372 23 29.9971 23H20.2221ZM25.1395 26.3273C25.7995 26.3198 26.3279 25.8288 26.3196 25.2305C26.3114 24.6323 25.7696 24.1533 25.1096 24.1608C24.4496 24.1683 23.9212 24.6594 23.9295 25.2576C23.9377 25.8559 24.4795 26.3348 25.1395 26.3273Z"
              fill="currentcolor"
            />
            <path
              d="M20 29H30V29C30 29.5523 29.5523 30 29 30H21C20.4477 30 20 29.5523 20 29V29Z"
              fill="currentcolor"
            />
            <path
              d="M20.4414 6.93762C20.4743 6.41059 20.9114 6 21.4395 6H22.5605C23.0886 6 23.5257 6.41059 23.5586 6.93762L24 14H20L20.4414 6.93762Z"
              fill="currentcolor"
            />
            <path
              d="M8.91695 23.5764C8.39866 23.5332 8 23.1 8 22.5799L8 21.4201C8 20.9 8.39866 20.4668 8.91695 20.4236L14 20L14 24L8.91695 23.5764Z"
              fill="currentcolor"
            />
          </svg>

          <h1 className="section-title flex font-Asap text-3xl font-semibold text-main-200">
            Work Experience
          </h1>
        </div>
        <div className="my-12 flex space-x-3 items-start">
          <div className="relative flex flex-col items-start border-l border-main-500">
            <div
              id="indicator"
              className={`absolute -left-[1px] h-[56px] w-[2px] bg-main-200 transition-all duration-300`}
            ></div>
            {work.map((data, index) => (
              <button
                key={index}
                className={`w-full p-4 text-left hover:bg-main-400 hover:bg-opacity-40 hover:text-main-200 ${
                  selected == index ? "text-main-200" : "text-main-500"
                }`}
                onClick={() => {
                  setSelected(index);
                }}
              >
                {data.company}
              </button>
            ))}
          </div>
          <div className="flex-1">
            {work.map((data, index) => (
              <div
                key={index}
                className={`p-6 text-main-200 font-redhat transition-all duration-200 ${
                  selected == index ? "visible" : "hidden"
                }`}
              >
                <h1 className="font-Asap text-xl mb-2"> {data.job} </h1>
                <p className="font-Fira text-sm text-main-400 mb-6">
                  {data.time} @ {data.location}
                </p>
                {data.desc.map((desc, i) => (
                  <Text key={i}>{desc}</Text>
                ))}
                <Text>Tech Used</Text>
                <ul className="grid list-disc grid-cols-4 gap-3 font-Fira text-main-100">
                  {data.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
