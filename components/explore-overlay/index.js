import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const ExploreOverlay = () => {

    const overlay = useRef();
    const container = useRef();
    const [searchTerm, setSearchTerm] = useState(null);

    useEffect(() => {
        const open = () => {
            overlay.current.classList.add(styles.overlayOpen);
            container.current.classList.add(styles.containerOpen);
        }

        document.body.addEventListener("ExploreOverlayOpen", open);

        return () => document.body.removeEventListener("ExploreOverlayOpen", open);
    }, []);

    useEffect(() => {
        if (!searchTerm) {
            return;
        }

        console.log(searchTerm);
    }, [searchTerm]);

    const handleClose = (e) => {
        overlay.current.classList.remove(styles.overlayOpen);
        container.current.classList.remove(styles.containerOpen);
    }

    const handleSearch = (e) => {
        const value = e.nativeEvent.target.value.toLowerCase();
        const isEnter = e.nativeEvent.key === "Enter" || e.nativeEvent.keyCode === 13;
        
        if (isEnter) {
            setSearchTerm(value);
        }
    }

    return (
        <div ref={overlay} className={styles.overlay}>
            <div ref={container} className={styles.container}>
                <button className={`${styles.close} material-symbols-outlined`} onClick={handleClose}>close</button>
                <h2 className={styles.title}>Tell us about your <span className={styles.highlight}>challenge</span></h2>
                <input className={styles.search} type="text" placeholder="Search" onKeyDown={handleSearch}></input>
            </div>
        </div>
    );
}

export default ExploreOverlay;