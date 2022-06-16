import { BagItems } from "../components/bagitems"
import { Banner } from "../components/banner"
import { Brand } from "../components/brand"
import { Heading } from "../components/heading"
import { PriviousBags } from "../components/priviousbags"
import { Subscription } from "../components/subscription"
import { Testimonials } from "../components/Testimonials"
import { Trending } from "../components/trending"



export const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Heading text={"WHAT'S IN THE BAG"}></Heading>
            <BagItems></BagItems>
            <Heading text={"SUBSCRIPTION"}></Heading>
            <Subscription></Subscription>
            <Heading text={"PREVIOUS BAGS"}></Heading>
            <PriviousBags></PriviousBags>
            <Testimonials></Testimonials>
            <Trending></Trending>
            <Brand></Brand>
        </div>
    )
}