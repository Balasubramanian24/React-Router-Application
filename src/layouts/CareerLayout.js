import { Outlet } from "react-router-dom";

export default function CareerLayout() {
    return(
        <div className="career-layout">
            <h1>Careers</h1>
            <p>Dive into your Career..!!</p>
            <Outlet />
        </div>
    );
}