import { Outlet } from "react-router-dom";
import NavbarBlog from "./Navbar";

function Layout() {
    return (
        <div>
            <NavbarBlog />
            <Outlet />
        </div>
    );
}

export default Layout;
