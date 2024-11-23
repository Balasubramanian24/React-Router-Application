import { useLoaderData, Link } from "react-router-dom";


export default function Career() {
    const careers = useLoaderData()

    if (!careers || careers.length ===0) {
        return <p>No Career opportunites available at the moment.</p>
    }

    return(
        <div className="careers">
            {careers.map((career) => (
                <Link to={`/career/${career.id}`} key={career.id}>
                    <p>{career.title}</p>
                    <p>From {career.location}</p>
                </Link>
            ))}
        </div>
    );
}


//loader function 

export const careerLoader = async () => {
    const res = await fetch('http://localhost:4000/career');
    
    if (!res.ok) {
        throw new Error(`Could not fetch career details: ${res.statusText}`);
    }

    return res.json();
}
