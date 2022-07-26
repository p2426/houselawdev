import Head from "next/head";
import { useRouter } from "next/router";
import ExploreOverlay from "../explore-overlay";
import Navigation from "../navigation";
import styles from "./index.module.css";

const Layout = ({ children }) => {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Houselawdev</title>
                <meta name="description" content="Houselawdev" />
                <link href="http://fonts.cdnfonts.com/css/avenir" rel="stylesheet" preload/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" preload/>
            </Head>

            <div className={styles.wrapper}>
                <Navigation/>
                {children}
                {router.pathname === "/" && <ExploreOverlay/>}
            </div>
        </>
    )
};

export default Layout;
