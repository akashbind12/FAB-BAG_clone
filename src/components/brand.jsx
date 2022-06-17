import "../css/brand.css"
import Slider from "react-slick";

export const Brand = () => {

    const brands = ["https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Baiser_India_Logo_160x160.jpg?v=1625063066",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg?v=1599290601",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/brick-new-york-with-symbol-white_46f7f93d-9ac3-4a6b-8827-7341564c001c_160x160.png?v=1599126230",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/palmers-logo_33a73358-5f3d-4cd4-ac8c-ecf89a2c72b2_160x160.jpg?v=1597725541",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg?v=1578730298",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/sugar_1_160x160.jpg?v=1548837170",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Plum_Logo_For_Olive_and_Macadamia_Hair_Spa_Kit_160x160.png?v=1625063052",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Tru_hair_logo_160x160.png?v=1625063080",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/WOC_Beauty_Logo_160x160.jpg?v=1602225835",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg?v=1578730298"
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className="mainbrand">
            <div className="brand">
                <Slider {...settings}>
                    {brands.map((e) => {
                        return (
                            <div className="brandimgdiv">
                                <img src={e} className="brandimg"  alt="brandsimg" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
       </div>
    )
}