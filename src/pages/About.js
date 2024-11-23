import { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {

    const [user, setUser] = useState('Bala');
    if(!user) {
        return <Navigate to='/' replace={true}/>
    }

    return (
        <div className="about">
            <h1>Welcome to About section</h1>
            <p>Learning some react routes</p>
            <p><ul> <li>Router Basics</li> </ul></p>
            <p><ul> <li>Router Provider, createBrowserRouter, & Outlets</li> </ul></p>
            <p><ul> <li>Nested Routes & Layouts</li> </ul></p>
            <p><ul> <li>Error 404 page</li> </ul></p>
            <p><ul> <li>React Loaders</li> </ul></p>
            <p><ul> <li>Router parameters</li> </ul></p>
            <p><ul> <li>Error Elements</li> </ul></p>
            <p><ul> <li>Creating Breadcrumbs</li> </ul></p>
            <p><ul> <li>Form handlings</li> </ul></p>
            <p><ul> <li>Navigating components</li> </ul></p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    );
}

export default About;


//Logout button for previous page reload to prevent data