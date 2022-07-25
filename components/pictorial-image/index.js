import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const PictorialImage = ({ src, transitionDelay }) => {

    const ref = useRef();

    useEffect(() => {
        ref.current.classList.add(styles.pictorialImageShow);
    }, [])

    return <img ref={ref} className={styles.pictorialImage} src={src} style={{ transitionDelay: transitionDelay }}/>;
}

export default PictorialImage;