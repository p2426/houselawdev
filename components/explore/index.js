import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const Explore = ({ transitionDelay }) => {

    const containerRef = useRef();

    useEffect(() => {
        containerRef.current.classList.add(styles.exploreOpen);
    }, [])

    return (
        <div ref={containerRef} className={styles.explore} style={{ transitionDelay: transitionDelay }}>
            <span>Explore</span>
            <span className={`${styles.exploreArrow} material-symbols-outlined`}>arrow_forward</span>
            <div className={styles.exploreHoverBackground}></div>
        </div>
    );
};

export default Explore;