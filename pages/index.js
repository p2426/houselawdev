import { useEffect, useRef } from "react";
import Explore from "../components/explore";
import PictorialCard from "../components/pictorial-card";
import PictorialImage from "../components/pictorial-image";
import styles from "./index.module.css";

const transitionDelays = {
    titleText: "0.5s",
    descriptionText: "1s",
    imageOne: "1.2s",
    imageTwo: "1.4s",
    imageThree: "1.6s",
    explore: "2s",
};

const Home = () => {

    const textTitleRef = useRef();
    const textDescriptionRef = useRef();

    useEffect(() => {
        textTitleRef.current.classList.add(styles.textShow);
        textDescriptionRef.current.classList.add(styles.textShow);
    }, []);

    return (
        <main className={styles.main}>

            <div className={styles.textContainer}>
                <h1 ref={textTitleRef} className={`${styles.textHidden} mega`} style={{ transitionDelay: transitionDelays.titleText }}>A <span className={styles.highlight}>Leading </span> Global Law Firm</h1>
                <p ref={textDescriptionRef} className={`${styles.description} ${styles.textHidden}`} style={{ transitionDelay: transitionDelays.descriptionText }}>Lorem ipsum dolor sit amet, et partem nullam vim. Erant postulant suscipiantur qui ad, mel rebum tritani invenire an. Ex mea dicunt oportere, vel prompta fabellas id. Cetero debitis no his.</p>

                <Explore transitionDelay={transitionDelays.explore}/>
            </div>

            <div className={styles.pictorialContainer}>
                <div className={styles.leftFlex}>
                    <PictorialImage src="/1.png" transitionDelay={transitionDelays.imageOne}/>
                    <PictorialCard src="/2.png" align="flex-end" transitionDelay={transitionDelays.imageThree}/>
                </div>
                <div className={styles.rightFlex}>
                    <PictorialImage src="/3.png" transitionDelay={transitionDelays.imageTwo}/>
                </div>
            </div>

        </main>
    )
};

export default Home;
