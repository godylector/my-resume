import { FC } from "react";

// Main Section
import MainSection1 from "./section1";
import MainSection2 from "./section2";
import MainSection3 from "./section3";
import MainSection4 from "./section4";

const Main: FC = () => {
    return (
        <main>
            <MainSection1 />
            <MainSection2 />
            <MainSection3 />
            <MainSection4 />
        </main>
    )
}

export default Main;