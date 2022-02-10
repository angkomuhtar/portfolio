import React from "react";

const Project = () => {
  return (
    <div
      id="project"
      className="min-h-screen flex flex-col justify-center pt-28"
    >
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 flex w-full items-center space-x-5">
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
            Projects
          </h1>
        </div>
        <div className="bg-white h-40"></div>
        <div className="bg-white h-40"></div>
      </div>
    </div>
  );
};

export default Project;
