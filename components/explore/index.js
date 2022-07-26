import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const Explore = ({ transitionDelay }) => {

    const containerRef = useRef();

    useEffect(() => {
        containerRef.current.classList.add(styles.exploreOpen);
    }, []);

    const handleClick = () => {
        document.body.dispatchEvent(new CustomEvent("ExploreOverlayOpen"));
    }

    return (
        <button ref={containerRef} className={styles.explore} style={{ transitionDelay: transitionDelay }} type="button" onClick={handleClick}>
            <span>Explore</span>
            <span className={`${styles.exploreArrow} material-symbols-outlined`}>arrow_forward</span>
            <div className={styles.exploreHoverBackground}></div>
        </button>
    );
};

export default Explore;