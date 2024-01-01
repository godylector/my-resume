import { FC } from "react";

// Images
import Avatar1 from "../../assets/images/avatar1.png";

const MainSection1: FC = () => {
  return (
    <section className="w-full h-screen">
      <div className="relative w-full h-full">
        <div className="absolute z-[0] bottom-0 left-[22vw] w-[50vw] h-[90dvh] backdrop-blur-md bg-[#1E1E1E]/80 rounded-[20px] p-4">
            test
        </div>
        <div className="absolute z-[2] bottom-[-3vh] right-[17vw] w-[20vw]">
          <img
            src={Avatar1}
            className="w-full h-full object-cover"
            alt="avatar"
            draggable={false}
          />
        </div>
        <div className="absolute z-[1] bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="445"
            viewBox="0 0 1920 445"
            fill="none"
            className="m-auto w-full h-full"
          >
            <g filter="url(#filter0_d_7_246)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 157.127L46.9317 169.122C92.245 181.116 184.49 205.106 276.735 235.093C370.598 265.079 462.843 301.064 555.088 301.064C647.333 301.064 739.578 265.079 831.823 277.074C924.068 289.069 1017.93 349.042 1110.18 349.042C1202.42 349.042 1294.67 289.069 1386.91 241.09C1479.16 193.111 1571.4 157.127 1665.27 145.132C1757.51 133.138 1849.76 145.132 1895.07 151.13L1942 157.127V445H1895.07C1849.76 445 1757.51 445 1665.27 445C1571.4 445 1479.16 445 1386.91 445C1294.67 445 1202.42 445 1110.18 445C1017.93 445 924.068 445 831.823 445C739.578 445 647.333 445 555.088 445C462.843 445 370.598 445 276.735 445C184.49 445 92.245 445 46.9317 445H0V157.127Z"
                fill="url(#paint0_linear_7_246)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_7_246"
                x="-54"
                y="0"
                width="2062"
                height="445"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6" dy="-80" />
                <feGaussianBlur stdDeviation="30" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_7_246"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_7_246"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_7_246"
                x1="971"
                y1="140"
                x2="971"
                y2="445"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#04EBCB" />
                <stop offset="1" stop-color="#00D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainSection1;
