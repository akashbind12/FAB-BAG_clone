import { useState } from "react"
import { Link } from "react-router-dom"
import { Subscription } from "../components/subscription"
import "../css/productdetail.css"
import axios from "axios";

export const ProductDetails = () => {

  const bag = {
    "id" : 1,
    "img": "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3.gif?v=1655088937",
    "title": "The Make It Reign June Fab Bag"
}

  const addTocart = () => {
    axios.post('http://localhost:8080/cart', bag)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   
    const [details, setDetails] = useState(true)
    const [view, setView] = useState(false)

    return (
        <>
        <div className="main">
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3.gif?v=1655088937" alt="" />
            <img className="small_img" src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3.gif?v=1655088937"/>
          </div>
          <div>
            <p>Home</p>
            <p className="title">The Make It Reign June Fab Bag</p>
            <p className="title"> Rs. 599.00</p>
            <p className="prod_dis"> It's raining beauty! Make a splash with 5 cult-favourite makeup & skincare essentials in the Make It Reign...</p>
            <h4 className="Plans">Plans</h4>
            <div className="months">
              <p>1 MONTH</p>
              <p> 2 MONTH</p>
            </div>
            <div className="counter">
              <h1>-</h1>
              <h1>1</h1>
              <h1>+</h1>
            </div>
            <Link to="/cart"><button className="Add_button" onClick={addTocart}> ADD TO CART</button></Link>
            </div>
        </div>
        <div className="des">
          <div  onClick={()=>{
            setDetails(true)
            setView(false)
          }} className={`${details}`}>DESCRIPTION</div>
          <div onClick={()=>{
            setDetails(false)
            setView(true)
          }} className={`${view}`}>VIEW PLANS</div>
          <div>RETURNS POLICY</div>
          <div>CUSTOMER REVIEWS</div>
        </div>
            {details ?
                <div className="hover_details">
                    <p>It's raining beauty! Make a splash with 5 cult-favourite makeup & skincare essentials in the Make It Reign June Fab Bag.</p>
                    <p>Here's what you can expect inside your May Fab Bag:</p>
                    <ul>
                        <li>Plume Plush Matte Lipstick of your choice!*</li>
                        <li>C2P Pro Epic Matte Lip Ink Set OR eclat Fadeout Pigment Correcting Serum OR Teen Teen Ceremonial Makeup 8 Color Eyeshadow Kit*</li>
                        <li>The Soap Company India Foot Therapy</li>
                        <li>Baiser India Eye Brow Growth Oil</li>
                        <li>Bonus Skincare*</li>
                    </ul>
                    <p>Two offers cannot be clubbed. Makeup choice will be available on the order confirmation page, on a first-come, first-served basis. 2nd product is subject to stock availability. Bonus skincare will be customized by the Fab Bag Crew.</p>
                    <p style={{
                        marginTop: "10px"
                    }}>FAB BAG delivers the best of beauty and makeup products once a month, customized just for you.</p>
                </div>
                :
                <Subscription ></Subscription>
            }
      </>
    )
}