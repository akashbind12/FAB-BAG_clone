import "../css/banner.css"
import { useState,useEffect } from "react"

export const Banner = () => {
    
    const [index,setIndex]=useState(null)

    const slide = ["https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Skincare-Reveal-2_e80ce1fa-6ef9-4b86-956b-39849dfa481e_2048x.png?v=1654754496",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Skincare-Reveal-1_3eea010e-a16d-4db6-a55b-f1bddc0a348b_2048x.png?v=1654580659",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal-2_a7ef86d4-3e1a-407f-b29f-cbda164767bc_2048x.png?v=1654408494",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Entire-Bag-Reveal_2048x.png?v=1655088738",
    ]

    let id
    const handleSlide=()=>{
         id= setInterval(()=>{           

            setIndex(pre=>{
                if(pre>=3){
                    pre=-1
                }
              return  pre+1
            });
        },3000)

    }

    useEffect(()=>{
        handleSlide()
        return function cleanup(){
            clearInterval(id)
        } 
        // eslint-disable-next-line
    },[]);
    
    return (
        <div>
            <div className="banner">
                <img src={slide[index]} alt="....loading" />
            </div>
        </div>
    )
}

