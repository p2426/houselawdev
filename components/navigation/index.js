import Link from "next/link";
import styles from "./index.module.css";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.titleContainer}>
                <span className={styles.titlePre}>HOUSE</span>
                <span className={styles.titlePost}>LAW</span>
            </div>
            <div className={styles.actions}>
                <Link href="/login">
                    <a className={styles.action}>
                        <span className={`${styles.actionKick} material-symbols-outlined`}>person</span>
                        <span>Login</span>
                    </a>
                </Link>
                <Link href="/en">
                    <a className={`${styles.action} ${styles.actionSplitRight}`}>
                        <span className={`${styles.actionKick} material-symbols-outlined`}>language</span>
                        <span>EN</span>
                    </a>
                </Link>
                <div className={`${styles.action} ${styles.menu} ${styles.actionSplitLeft}`}>
                    <span className={styles.actionKick}>Menu</span>
                    <span className="material-symbols-outlined">density_medium</span>
                </div>
                <div className={`${styles.action} ${styles.search}`}>
                    <span className="material-symbols-outlined">search</span>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
