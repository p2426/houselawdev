import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Houselawdev</title>
                <meta name="description" content="Houselawdev" />
            </Head>
            {children}
        </>
    )
};

export default Layout;
