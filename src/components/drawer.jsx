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



export const  Drawercart =() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
          <DrawerContent>
                <DrawerCloseButton color='white' fontSize='18px' mt="30px"/>
                <div className='drawercart'>
                    <h1>MY CART</h1>
                </div>
                <div className='drawercartitem'>
                    <div className='drawercartitemimg'>
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_small.gif?v=1655088937" alt="img" />
                    </div>
                    <div className='drawercartitemdetails'>
                        <h1>The Make It Reign June Fab Bag</h1>
                        <h1 className='Qty'>Qty: 4 Rs. 599.00</h1>
                    </div>
                    <div className='drawerclosebutton'>
                        X
                    </div>
                </div>
                <div className='drawer-bottom'>
                    <div className='drawertotal'>
                        <h1>Total:</h1>
                        <h1 className='Qty'>Rs. 3,595.00</h1>
                    </div>
                    <Link to="/productsdetails"><div className='viewcart'>VIEW CART</div></Link>
                    <div className='drawercheckout'>CHECKOUT</div>
                </div>
          </DrawerContent>
      </>
    )
  }