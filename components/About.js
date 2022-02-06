import React from "react";
import List from "./List";
import Text from "./Text";

export const About = () => {
  return (
    <div
      data-aos="fade-left"
      className="mx-auto grid max-w-4xl grid-cols-2 gap-x-5 py-28"
    >
      <div
        className="col-span-2 flex items-center space-x-5 mb-8"
        data-aos="fade-right"
      >
        <svg
          className="h-10 w-10 text-main-200"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.4379" cy="10.1073" r="2.38806" fill="currentcolor" />
          <path
            d="M12.2202 13.0925C10.7951 13.0925 9.42843 13.6586 8.42077 14.6663L16.0195 14.6663C15.0119 13.6586 13.6452 13.0925 12.2202 13.0925Z"
            fill="currentcolor"
          />
          <rect x="4" y="32" width="32" height="2" rx="1" fill="currentcolor" />
          <rect
            x="3.50879"
            y="20.3508"
            width="32.9825"
            height="2.80702"
            rx="1.40351"
            fill="currentcolor"
          />
          <rect
            x="23.1577"
            y="6.31567"
            width="13.3333"
            height="2.80702"
            rx="1.40351"
            fill="currentcolor"
          />
          <rect
            x="23.1577"
            y="10.5264"
            width="13.3333"
            height="2.80702"
            rx="1.40351"
            fill="currentcolor"
          />
          <rect
            x="23.1577"
            y="14.7368"
            width="13.3333"
            height="2.80702"
            rx="1.40351"
            fill="currentcolor"
          />
          <rect
            y="37.8948"
            width="40"
            height="2.10526"
            rx="1.05263"
            fill="currentcolor"
          />
          <rect
            x="1"
            y="1"
            width="38"
            height="25.3684"
            rx="3"
            stroke="currentcolor"
            strokeWidth="2"
          />
          <rect
            x="4.50879"
            y="5.91235"
            width="15.5439"
            height="10.6316"
            rx="3"
            stroke="currentcolor"
            strokeWidth="2"
          />
        </svg>

        <h1 className="section-title flex font-Asap text-3xl font-semibold text-main-200">
          Whos Me.?
        </h1>
      </div>
      <div className="text-main-200" data-aos="fade-right" data-aos-delay="100">
        <Text>
          Hello! My name is Mushawiruddin Muhtar, people call me{" "}
          <span className="text-white">Angko</span> and I enjoy Build Something.
          My interest in web and apps development started back in 2014 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </Text>
        <Text>
          Here are a few technologies I’ve been working with recently:
        </Text>
        <List>
          <li>Javasript (ES6+)</li>
          <li>RectJs</li>
          <li>NextJs</li>
          <li>Tailwind / Bootstrap</li>
          <li>React Native</li>
          <li>Flutter</li>
        </List>
      </div>
      <div className="flex items-start">
        <div className="rounded-md border-2 border-main-200">
          <img
            src="/me.jpg"
            className="h-60 w-60 translate-x-3 -translate-y-3 rounded-md transition-all duration-200 hover:translate-x-0 hover:translate-y-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
