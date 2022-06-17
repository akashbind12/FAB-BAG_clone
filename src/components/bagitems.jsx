import "../css/bagitem.css";
import Slider from "react-slick";

export const BagItems = () => {

    const bagitem = [
        {
        img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Makeup-Reveal-1_1_f966e732-fa52-4f58-b117-b4ff2b57b163_2048x.png?v=1654234899",
        title: "Plume Plush Matte Lipstick of your choice!*"
        },
        {
        img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Makeup-Reveal-02_2048x.gif?v=1654408628",
        title: "C2P Pro Epic Matte Lip Ink Set OR e’clat Fadeout Pigment Correcting Serum OR Teen Teen Ceremonial Makeup 8 Color Eyeshadow Kit*"
        },
        {
        img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag--Skincare-Reveal-1_e0d6e35d-42cf-410b-9a92-eb0525b4e65c_2048x.png?v=1654580730",
        title: "The Soap Company India Foot Therapy"
        },
        {
        img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag--Skincare-Reveal-2_e505577a-ac80-4632-aaf1-f125466e35aa_2048x.png?v=1654754547",
        title: "Baiser India Eye Brow Growth Oil"
        },
        {
        img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag--Skincare-Reveal-3_2048x.gif?v=1655088829",
        title: "Bonus Skincare"
        }
    ]

    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
            style={{ ...style, color: "black", background: "lightgrey"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgrey"}}
        onClick={onClick}
      />
    );
  }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
       prevArrow: <SamplePrevArrow />,
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
        <div className="bagitem">
            <Slider {...settings}>
            {bagitem.map((e) => {
                return (
                    <div className="bagitemdiv">
                        <img  className="bagitemimg" src={e.img} alt="bagitem" />
                        <h3 className="bagitemtitle">{e.title}</h3>
                    </div>
                )
            })}
            </Slider>
        </div>
    )
}

