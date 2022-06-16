import "../css/Testimonials.css"
import { Heading } from "./heading"
import { FaQuoteLeft } from 'react-icons/fa';

export const Testimonials = () => {

    return (
        <div className="Testimonilas">
            <Heading text={"TESTIMONIALS"}></Heading>
            <div className="qoute">
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="quotesdiv">
                <p>I've been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes up with something or the other as a special attraction in the bag every month.  As always, thank you Fab Bag for making my day with this bag!!!</p>
                <p>- Poonam</p>
            </div>
        </div>
    )
}