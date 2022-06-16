import "../css/brand.css"


export const Brand = () => {

    const brands = ["https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Baiser_India_Logo_160x160.jpg?v=1625063066",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg?v=1599290601",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/brick-new-york-with-symbol-white_46f7f93d-9ac3-4a6b-8827-7341564c001c_160x160.png?v=1599126230",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/palmers-logo_33a73358-5f3d-4cd4-ac8c-ecf89a2c72b2_160x160.jpg?v=1597725541",
        "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg?v=1578730298",
    ]

    return (
        <div className="mainbrand">
             <div className="brand">
                {brands.map((e) => {
                    return (
                        <div>
                            <img src={e} alt="brandsimg" />
                        </div>
                    )
                })}
            </div>
       </div>
    )
}