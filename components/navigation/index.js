import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const Navigation = () => {

    const navigationRef = useRef();
    const menuSearchVerticalBarRef = useRef();
    const router = useRouter();
    const isHome = router.pathname === "/";
    const homeMenuSearchWhite = isHome ? styles.white : "";

    useEffect(() => {
        navigationRef.current.classList.add(styles.navigationOpaque);
        if (isHome) {
            menuSearchVerticalBarRef.current?.classList.add(styles.menuSearchVerticalBarFull);
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
                    {isHome && <div ref={menuSearchVerticalBarRef} className={styles.menuSearchVerticalBar}></div>}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
