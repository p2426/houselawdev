import PictorialCard from "../components/pictorial-card";
import styles from "./index.module.css";

const Home = () => {
    return (
        <main className={styles.main}>
            <div className={styles.textContainer}>
                <h1 className="mega">A <span className={styles.highlight}>Leading </span> Global Law Firm</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, et partem nullam vim. Erant postulant suscipiantur qui ad, mel rebum tritani invenire an. Ex mea dicunt oportere, vel prompta fabellas id. Cetero debitis no his.</p>
                <div className={styles.explore}>
                    <span>Explore</span>
                    <span className={`${styles.exploreArrow} material-symbols-outlined`}>arrow_forward</span>
                </div>
            </div>
            <div className={styles.pictorial}>
                <div className={styles.pictorialLeft}>
                    <img className={styles.pictorialImage} src="/1.png"/>
                    <PictorialCard align="flex-end"/>
                </div>
                <div className={styles.pictorialRight}>
                    <img className={styles.pictorialImage} src="/3.png"/>
                </div>
            </div>
        </main>
    )
};

export default Home;
