import { useEffect, useRef, useState } from "react";
import Chip from "../chip";
import PeopleCard from "../people-card";
import GoArrow from "../go-arrow";
import styles from "./index.module.css";

const searchableTerms = ["healthcare"];
const searchSectionTransitionDelays = {
    first: "0.5s",
    second: "0.8s",
}

const ExploreOverlay = () => {

    const overlay = useRef();
    const container = useRef();
    const searchSection = useRef();
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
        if (!searchTerm || !searchableTerms.includes(searchTerm)) {
            return;
        }

        setTimeout(() => {
            searchSection.current.classList.add(styles.searchSectionShow);
        }, 0);
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

                <div className={styles.chipContainer}>
                    <Chip text="Suggested Keywords" muted={true}/>
                    <Chip text="Health and Social Care - NHS/Public Sector"/>
                    <Chip text="Health and Social Care - Independant"/>
                </div>

                {searchTerm && <div ref={searchSection}>
                    <div className={styles.searchSection} style={{ transitionDelay: searchSectionTransitionDelays.first }}>
                        <div className="flex-column">
                            <h4 className={styles.heading}>Expertise</h4>
                            <span className={styles.subheading}>Healthcare Regulatory</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia…</p>
                        </div>
                        <GoArrow/>
                    </div>

                    <div ref={searchSection} className={styles.searchSection} style={{ transitionDelay: searchSectionTransitionDelays.second }}>
                        <div className={styles.halfSection}>
                            <div className="flex space-between">
                                <h4 className={styles.heading}>Suggested People</h4>
                                <span className={styles.viewMore}>View more</span>
                            </div>
                            <PeopleCard src="/4.png" name="Marques Johnson" job="Partner" location="London" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." next={true}/>
                        </div>

                        <div className={styles.halfSection}>
                            <div className="flex space-between">
                                <h4 className={styles.heading}>Suggested Articles</h4>
                                <span className={styles.viewMore}>View more</span>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
        </div>
    );
}

export default ExploreOverlay;