import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const Navigation = () => {

    const navigationRef = useRef();
    const menuSearchVerticalBarRef = useRef();
    const barText = useRef();
    const barArrow = useRef();
    const router = useRouter();
    const isHome = router.pathname === "/";
    const homeMenuSearchWhite = isHome ? styles.white : "";

    useEffect(() => {
        navigationRef.current.classList.add(styles.navigationOpaque);
        if (isHome) {
            menuSearchVerticalBarRef.current?.classList.add(styles.menuSearchVerticalBarFull);
            barText.current?.classList.add(styles.menuSearchVerticalBarTextOpaque);
            barArrow.current?.classList.add(styles.menuSearchVerticalBarArrowOpaque);
        }
    }, [isHome]);

    return (
        <nav ref={navigationRef} className={styles.navigation}>
            <Link href="/">
                <a className={styles.titleContainer}>
                    <span className={styles.titlePre}>HOUSE</span>
                    <span className={styles.titlePost}>LAW</span>
                </a>
            </Link>
            <div className={styles.actions}>
                <Link href="/login">
                    <a className={styles.action}>
                        <span className={`${styles.actionKick} material-symbols-outlined`}>person</span>
                        <span>Login</span>
                    </a>
                </Link>
                <Link href="/language">
                    <a className={`${styles.action} ${styles.actionSplitRight}`}>
                        <span className={`${styles.actionKick} material-symbols-outlined`}>language</span>
                        <span>EN</span>
                    </a>
                </Link>
                <div className={`${styles.menuSearchContainer} ${homeMenuSearchWhite}`}>
                    <div className={`${styles.action} ${styles.menu} ${styles.actionSplitLeft}`}>
                        <span className={styles.actionKick}>Menu</span>
                        <span className="material-symbols-outlined">density_medium</span>
                    </div>
                    <div className={`${styles.action} ${styles.search}`}>
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    {isHome && <div ref={menuSearchVerticalBarRef} className={styles.menuSearchVerticalBar}>
                            <span ref={barText} className={styles.menuSearchVerticalBarText}>Scroll down</span>
                            <svg ref={barArrow} className={styles.menuSearchVerticalBarArrow} xmlns="http://www.w3.org/2000/svg" width="32" height="167" viewBox="0 0 32 167" fill="none">
                                <g >
                                    <line x1="15" y1="-0.00598792" x2="16" y2="166.994" stroke="white" strokeWidth="2"/>
                                    <line x1="16.2929" y1="166.707" x2="1.29289" y2="151.707" stroke="white" strokeWidth="2"/>
                                    <line x1="15.2929" y1="167.293" x2="30.2929" y2="152.293" stroke="white" strokeWidth="2"/>
                                </g>
                            </svg>
                        </div>}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
