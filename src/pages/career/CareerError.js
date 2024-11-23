import { NavLink, useRouteError } from "react-router-dom";

export default function CareerError() {
    const error = useRouteError;
    
    return(
        <div className="career-error">
            <h1>Error..!! displaying the Career page</h1>
            <p>{error.message}</p>
            <p>Back to the <NavLink to="/">Home</NavLink> <NavLink to="/career">Career</NavLink></p>
        </div>
    );
}