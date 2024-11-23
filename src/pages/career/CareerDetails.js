import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();

    if (!career) {
        return <p>Loading career details...</p>; // Fallback for undefined data
    }

    return (
        <div className="current-career">
            <h1>Career Details: {career.title}</h1>
            <h2>Salary: {career.salary}</h2>
            <h2>Current Location: {career.location}</h2>
            <p>Job Description: {career.description}</p>
        </div>
    );
}


//loader function

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/career/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch career details: ${res.statusText}`);
        }
        return res.json();
};
