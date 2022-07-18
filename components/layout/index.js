import Head from "next/head";
import Navigation from "../navigation";
import styles from "./index.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Houselawdev</title>
                <meta name="description" content="Houselawdev" />
                <link href="http://fonts.cdnfonts.com/css/avenir" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>

            <div className={styles.wrapper}>
                <Navigation/>
                {children}
            </div>
        </>
    )
};

export default Layout;
