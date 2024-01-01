import { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Images
import Avatar1 from "../../assets/images/avatar1.png";
import CloudImage from "../../assets/images/cloud.png";

const Cloud: FC = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -2000 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
      style={{ translateX, opacity }}
      className="absolute top-[2vw] left-[2vw] w-[96vw] h-[80dvh]"
    >
      <img src={CloudImage} className="w-full h-full" alt="cloud" />
    </motion.div>
  );
};

const Wave: FC = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      style={{ translateY, opacity }}
      className="absolute bottom-0 left-0 z-[1] w-full"
    >
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
            fillRule="evenodd"
            clipRule="evenodd"
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
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <stop stopColor="#04EBCB" />
            <stop offset="1" stopColor="#00D1FF" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const CodeBox: FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const textLists = [
    {
      tag: "h1",
      text: 'My name is "Sakkarin Simma"',
      status: true,
    },
    {
      tag: "h2",
      text: 'You can call me "Fluk"',
      status: true,
    },
    {
      tag: "",
      text: "",
      status: false,
    },
    {
      tag: "h1",
      text: "Socials",
      status: true,
    },
    {
      tag: "a",
      href: "Facebook",
      text: "Sakkarin Simma",
      link: "https://www.facebook.com/sakkarin.simma.1/",
      status: true,
    },
    {
      tag: "a",
      href: "Github",
      text: "godylector",
      link: "https://github.com/godylector",
      status: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{ scale, opacity }}
      className="absolute z-[0] bottom-5 2xl:left-[22vw] xl:left-[22vw] left-6 2xl:w-[50vw] xl:w-[55vw] lg:w-[70vw] md:w-[70vw] w-[90%] h-[95vh] backdrop-blur-lg bg-[#1E1E1E]/80 rounded-[20px] p-4 shadow-lg shadow-black/20"
    >
      <div className="flex justify-start items-center gap-3">
        <div className="w-[15px] h-[15px] bg-[#F43838] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-[#F49D38] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-[#38F43F] rounded-full"></div>
      </div>
      <div className="mt-5">
        {textLists.map((item, idx) => (
          <div key={idx} className="flex justify-start items-center gap-6">
            <p className="text-[#858585] text-[25px] font-[400]">{idx + 1}</p>
            {item.status && (
              <>
                {(item.tag === "a" && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[17px]"
                  >
                    <span className="text-[#808080]">{"<"}</span>
                    <span className="text-[#569CD6]">
                      {item.tag}{" "}
                      {item.tag === "a" ? (
                        <span>
                          href=<span className="text-white">"{item.href}"</span>
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                    <span className="text-[#808080]">{">"}</span>
                    <span>{item.text}</span>
                    <span className="text-[#808080]">{"</"}</span>
                    <span className="text-[#569CD6]">{item.tag}</span>
                    <span className="text-[#808080]">{">"}</span>
                  </a>
                )) || (
                  <h1 className="text-white 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[17px]">
                    <span className="text-[#808080]">{"<"}</span>
                    <span className="text-[#569CD6]">
                      {item.tag}
                      {item.tag === "a" ? (
                        <span>
                          href=<span className="text-white">"{item.href}"</span>
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                    <span className="text-[#808080]">{">"}</span>
                    <span>{item.text}</span>
                    <span className="text-[#808080]">{"</"}</span>
                    <span className="text-[#569CD6]">{item.tag}</span>
                    <span className="text-[#808080]">{">"}</span>
                  </h1>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Avatar: FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const avatarTranslateX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 200 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
      style={{ translateX: avatarTranslateX, opacity }}
      className="2xl:block xl:block lg:block md:block hidden absolute z-[2] bottom-0 2xl:right-[17vw] xl:right-[9vw] lg:right-[11vw] md:right-[8vw] 2xl:w-[20vw] xl:w-[24vw] lg:w-[29vw] md:w-[32vw] w-[50vw] h-[100dvh]"
    >
      <img
        src={Avatar1}
        className="w-full h-full object-cover"
        alt="avatar"
        draggable={false}
      />
    </motion.div>
  );
};

const MainSection1: FC = () => {
  return (
    <section className="w-full h-screen">
      <div className="relative w-full h-full">
        <Cloud />
        <CodeBox />
        <Avatar />
        <Wave />
      </div>
    </section>
  );
};

export default MainSection1;
