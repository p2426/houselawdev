import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const VOLUME_UP = "volume_up";
const VOLUME_OFF = "volume_off";

const PictorialCard = ({ src, align = "flex-end", transitionDelay = "1s" }) => {

    const [volumeState, setVolumeState] = useState(VOLUME_OFF);
    const containerRef = useRef();
    const volumeRef = useRef();

    useEffect(() => {
        containerRef.current.classList.add(styles.pictorialCardShow);
    }, []);

    const handleVolumeClick = (e) => {
        setVolumeState(volumeState === VOLUME_UP ? VOLUME_OFF : VOLUME_UP);
    }

    return (
        <div ref={containerRef} className={styles.pictorialCard} style={align && { alignSelf: align, transitionDelay: transitionDelay }}>
            <img src={src}/>
            <div className={styles.textualContainer}>
                <div className={styles.descriptionContainer}>
                    <span className={styles.heading}>Welcome</span>
                    <span className={styles.subheading}>David Chan</span>
                    <span className={styles.text}>Senior Partner</span>
                </div>
                <div className={styles.audioContainer}>
                    <button type="button" className={styles.volume}>
                        <span ref={volumeRef} className="material-symbols-outlined" onClick={handleVolumeClick}>{volumeState}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PictorialCard;