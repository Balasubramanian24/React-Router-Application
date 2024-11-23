import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">

            <h1>Website Help</h1>
            <p>Welcome to our website! If you're new here, our help section is designed to guide you through every step of using our platform. Whether you're looking to create an account, manage your profile, or explore our services, we’ve got you covered.</p>

            <nav>
                <NavLink to="faq">View the FAQ's</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            
            <Outlet/ >

        </div>
    );

}