import "../css/Testimonials.css"
import { Heading } from "./heading"
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from "react-slick";

export const Testimonials = () => {

    const Testimonals = [
        {
            feedback: "I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab bags and all the lovely products and cute little pouches that I get. I love Fab Bag.",
            customer : "munira"
        },
        {
            feedback: "I've been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes up with something or the other as a special attraction in the bag every month.  As always, thank you Fab Bag for making my day with this bag!!!",
            customer : "Poonam"
        },
        {
            feedback: "I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.",
            customer : "Pratika"
        },
        {
            feedback: "This is my second month and I am already addicted. Can't wait for my third bag. It feels like someone with so much love who loves pampering you. Thank you Fab bag. Amazing products Thank you with gratitude.",
            customer : "Kirthana"
        },
        {
            feedback: "Who doesn't want to get pampered? And this bag is all you need when you want to show some extra love to yourself. Every other product is of the best quality. And top of it doesn't burn a hole in your pocket. Every month I just wait for my bag as a small kid waits for her favourite toy. This Fab Bag is an upright bliss.",
            customer : "Ayushree"
        },
        {
            feedback: "I am getting addicted to Fab Bag's. The first one I had ordered was simply to check it out as my friend had recommended. I am not someone who spends a lot of time thinking about beauty products and I am clueless when it comes to such matters. Which is why the Fab Bag's are perfect for me. This August Fab Bag had everything I needed! The product curation is perfect. It's like having my own personal shopper for beauty products and such pretty bags too.",
            customer : "Sailena"
        },
        {
            feedback: "The products are amazing and I am just in love with the bag! Kudos to you team!",
            customer : "Niranjana"
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     

    return (
        <div className="Testimonilas">
            <Heading text={"TESTIMONIALS"}></Heading>
            <div className="qoute">
                        <FaQuoteLeft></FaQuoteLeft>
            </div>
            <Slider {...settings}>
            {Testimonals.map((e) => {
                return (
                    <>
                    <div className="quotesdiv">
                        <p>{e.feedback}</p>
                        <p>- {e.customer}</p>
                    </div>
                    </>
                )
            })}
            </Slider>    
        </div>
    )
}