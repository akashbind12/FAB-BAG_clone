import "../css/priviousbag.css";
import { useEffect, useState } from "react";
import axios from "axios"

export const PriviousBags = () => {

    const [priviousbags , setPriviousBags]  = useState([])

    useEffect(() => {
        getData()
      },[])
  
    const getData = () => {
      axios.get('https://fab-bag.herokuapp.com/priviousbag')
      .then(function (response) {
        console.log(response);
        setPriviousBags(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    }


    return (
        <div className="priviousbag">
            {priviousbags.map((e,i) => {
                return (
                    <div key={i}>
                    <img src={e.img} alt="bag" />
                    <p>{e.title}</p>
                    <h4>from Rs. 599.00</h4>
                </div>
                )
            })}
        </div>
    )
}



// {
//     img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3_large.png?v=1641707966",
//     title: "Jan'22 The Beauty Resolution Fab Bag"
// }
// {
//     img: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-3_large.gif?v=1638191014",
//     title: "Dec'21 The X-Must Haves Fab Bag"
// }