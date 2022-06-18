import "../css/cart.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DelteCart, GetCart } from "../Redux/cart/action";


export const Cart = () => {
    
    const dispatch = useDispatch()
    const cartitems = useSelector((state) => state.carts.cart)
    
    const total = cartitems.reduce(function (a, v) {
        return a + 599
    }, 0)
    

    useEffect(() => {
        dispatch(GetCart())
    }, [])
    

    const DeleteCartItem = (id) => {
        dispatch(DelteCart(id))
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
                    <div className="viewcart" onClick={()=>GetCart()}>UPDATE CART</div>
                    <div className="updatecart">CHECKOUT</div>
                </div>
            </div>
        </div>
    )
}