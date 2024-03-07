import { useLoaderData } from "react-router-dom";
import Teams from '../ui/Team';
import Testimonial from '../ui/Testimonial';
import { fetchOurTeams, fetchTestimonialData } from "../lib/loaders";

export async function loader({params}) {
    let teamData = await fetchOurTeams(params.teamName);
    let testimonialData = await fetchTestimonialData(params.teamName);
    return { team:teamData, testimonial:testimonialData };
}

export default function OurTeams() {
    
    const data = useLoaderData();

    return (
        <>
            <Teams {...data.team}/>
            <Testimonial data={data.testimonial}/>
        </>
    );
}