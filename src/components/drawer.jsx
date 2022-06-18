import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
  } from '@chakra-ui/react'
import React from "react";
import { Link } from 'react-router-dom';
import "../css/drawer.css"
import { useEffect, useState } from "react";
import axios from "axios";




export const  Drawercart =() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [cartitems, setCartItems] = useState([])
    
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
        console.log(id)

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
      <>
          <DrawerContent>
                <DrawerCloseButton color='white' fontSize='18px' mt="30px"/>
                <div className='drawercart'>
                    <h1>MY CART</h1>
                </div>

                {cartitems.map((e,i) => {
                    return (
                        <div key={i} className='drawercartitem'>
                            <div className='drawercartitemimg'>
                                <img src={e.img} alt="img" />
                            </div>
                            <div className='drawercartitemdetails'>
                                <h1>{e.title}</h1>
                                <h1 className='Qty'>Qty: 1 Rs. 599.00</h1>
                            </div>
                            <div className='drawerclosebutton' onClick={() =>DeleteCartItem(e.id)}>
                                X
                            </div>
                        </div>
                    )
                })}

                <div className='drawer-bottom'>
                    <div className='drawertotal'>
                        <h1>Total:</h1>
                        <h1 className='Qty'>Rs. {total}.00</h1>
                    </div>
                    <Link to="/cart"><div className='viewcart'>VIEW CART</div></Link>
                    <div className='drawercheckout'>CHECKOUT</div>
                </div>
          </DrawerContent>
      </>
    )
  }