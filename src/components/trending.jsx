
import "../css/trending.css";


export const Trending = () => {

    const trending_img = ["https://scontent.cdninstagram.com/v/t51.2885-15/287781826_547870406890584_2509560218106568808_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=6ihafTjxflMAX9x_QPs&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8E1BeB5RALtsaCVfdaH2-Fia-FlJWgoJLyrDXSCoicNg&oe=62AF21AC",
    "https://scontent.cdninstagram.com/v/t51.2885-15/288247736_344934671045738_5787529531618953693_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-sZXbU1AEacAX9UZYiH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9lR5mweDIy7oSOxxDXDk5Nmb-SEe1a1B8GYdWRK8go2Q&oe=62AF6153",
    "https://scontent.cdninstagram.com/v/t51.2885-15/287055846_612188326492102_1064014851967458744_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5I7S_K955DwAX-GUnlG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-ASLx2KePZ_f6rqWL3kzk6k7j_fUKb3hpWHzsFu0Ql-w&oe=62AF0E71",
    "https://scontent.cdninstagram.com/v/t51.2885-15/287097304_726198465345873_7443026387775070717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=KNZ9vM84kxAAX9HpmNh&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-pc6LmEcHI2MwlcKe9Vz3mZo_Bi39_j3HLi3uN9k0reA&oe=62B02BED",
    "https://scontent.cdninstagram.com/v/t51.2885-15/286812898_1148851382630584_8489032068582175399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_1pCgBgiXwYAX8pAbht&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-hlycsYGHjn4FmThM47UcQQTudS_Lk6rtyxU2ECmxkOw&oe=62B0C6C8",
    "https://scontent.cdninstagram.com/v/t51.2885-15/287055594_552052039955440_1019336681180280098_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=AbuMzRfFGesAX-M5Lhy&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9uemn5UTbxP40oTyiut81DB0BbYdkB4kTXmiG9Ah12ww&oe=62AFC527",
    "https://scontent.cdninstagram.com/v/t51.2885-15/287192209_739169030601627_5829339545655363575_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=VelIt7hSoL0AX-XMLIp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_S0uRiHwLbtzthNc_SJsZJ1h-bR7CC-orBfRhd9Qoksg&oe=62B0B58E",
    "https://scontent.cdninstagram.com/v/t51.2885-15/287019583_342642551349115_2095504123262142509_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=W7GdjfR82KgAX_idH1U&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-qGWUvTlUzxkREcL4Cr_l0AkQLYAApuTGeILx_ClankQ&oe=62AF2D26"
]

    return (
        <div>
            <div className="trend_heading">#TRENDINGNOW AT THE GOSSIP CORNER</div>
            <div className="trendingdiv">
                {trending_img.map((e) => {
                    return (
                        <div>
                            <img src={e} alt="img" />
                        </div>
                    )
                })}   
            </div>
        </div>
    )
}