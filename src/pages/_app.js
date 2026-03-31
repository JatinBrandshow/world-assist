import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <CustomCursor />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
