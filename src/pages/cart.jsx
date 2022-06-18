import "../css/cart.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const Cart = () => {

    const [cartitems , setCartItems]  = useState([])
    
    const total = cartitems.reduce(function (a, v) {
        return a + 599
    }, 0)
    

  useEffect(() => {
      getData()
    },[])

  const getData = () => {
    axios.get('http://localhost:8080/cart')
    .then(function (response) {
      console.log(response);
      setCartItems(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

    const DeleteCartItem = (id) => {

        axios.delete(`http://localhost:8080/cart/${id}`)
        .then(function (response) {
          console.log(response);
          getData()
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    return (
        <div className="cartpage">
            <h1 className="my_cart">My Cart</h1>
            <div className="cart_products">
                <div className="product-info">
                    <div className="row">
                        <div>PRODUCT</div>
                        <div>QTY</div>
                        <div>PRICE</div>
                        <div>x</div>
                    </div>

                    {cartitems?.map((e,i) => {
                        return (
                            <div key={i} className="row">
                            <div className="flex_div">
                                <div className="prod_img_div">
                                    <img src={e.img} alt="" />
                                </div>
                                <h1 className="cart_dis">{e.title}</h1>
                            </div>
                            <div style={{
                                fontSize: "15px",
                                fontWeight :"400"
                            }} className="qty">1</div>
                            <div style={{
                                fontSize: "15px",
                                fontWeight: "400",
                            }} className="price">Rs. {total}.00</div>
                            <div className="delete" style={{
                                fontSize: "15px",
                                fontWeight: "400",
                            }} onClick={() => DeleteCartItem(e.id)} >x</div>
                       </div>
                        )
                    })}
                  
                    
                </div>
                
                <div className="cart-buttons">
                    <div className="total_amount">
                        <div>TOTAL PRICE</div>
                        <div>Rs. {total}.00</div>
                    </div>
                    <div className="viewcart" onClick={getData}>UPDATE CART</div>
                    <div className="updatecart">CHECKOUT</div>
                </div>
            </div>
        </div>
    )
}