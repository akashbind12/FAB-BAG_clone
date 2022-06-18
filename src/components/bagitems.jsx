import "../css/bagitem.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const BagItems = () => {

  const [bagitems , setBagItems]  = useState([])

  useEffect(() => {
      getData()
    },[])

  const getData = () => {
    axios.get('http://localhost:8080/bagitem')
    .then(function (response) {
      console.log(response);
      setBagItems(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }


    
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
            {bagitems.map((e,i) => {
                return (
                    <div key={i} className="bagitemdiv">
                        <Link to="/productsdetails"><img  className="bagitemimg" src={e.img} alt="bagitem" /></Link>
                        <h3 className="bagitemtitle">{e.title}</h3>
                    </div>
                )
            })}
            </Slider>
        </div>
    )
}

