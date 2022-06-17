
import "../css/navbar.css"
import { BiSearch } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Drawer,DrawerOverlay,useDisclosure} from '@chakra-ui/react'
import React from "react";
import { Drawercart } from "./drawer";

export const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  

    return (
        <div className="navbar">
            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
               <Drawercart></Drawercart>
            </Drawer >

            <div className="head">
                <h3>
                    SUSCRIBE NOW
                </h3>
            </div>
            <div className="mainlogo">
                <div className="logodiv">
                <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289" alt="logo" />
                </div>
            </div>
            <div className="icondiv">
                <div><BiSearch /></div>
                <div><FiHeart/></div>
                <div><CgProfile/></div>
                <div onClick={onOpen}><AiOutlineShoppingCart/></div>
            </div>
        </div>
    )
}

