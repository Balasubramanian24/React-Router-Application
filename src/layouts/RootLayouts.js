import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs"


export default function RootLayout() {
    return(
        <div className="root-layout">
            <header>
                <nav>
                <h1>Job-Routing</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="career">Career</NavLink>
                <NavLink to="help">Help</NavLink>
                </nav>
            <Breadcrumbs />
            </header> 
            <main>
                <Outlet />
            </main>
        </div>
    );
}