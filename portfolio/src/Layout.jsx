import { Outlet } from "react-router-dom";
import Navabar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <>
            <Navabar />
            <Outlet />
            <Footer />
        </>
    );
}
