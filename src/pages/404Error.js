import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div>
            <h1>Oopss..!! Page Not Found..!</h1>
            <p>Go to the <Link to="/">Homepage</Link></p>
        </div>
    );
}