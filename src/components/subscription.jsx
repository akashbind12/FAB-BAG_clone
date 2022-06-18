import { Link } from "react-router-dom"
import "../css/subscription.css"

export const Subscription = () => {
    
    return (
        <div className="subscription">
            <div>
                <div>
                    <h3>1 MONTH</h3>
                    <p>SUBSCRIPTION</p>
                </div>
                <div>
                    <h3>Rs. 599.00</h3>
                    <p>/ per month</p>
                </div>
                <div>
                    <p className="yellow">ONE TIME PAYMENT</p>
                    <h3>Rs. 599.00</h3>
                </div>
                <Link to="/productsdetails"><div className="subs_btn">
                    <button>ADD TO CART</button>
                </div></Link>
            </div>

            <div>
                <div>
                    <h3>3 MONTH</h3>
                    <p>SUBSCRIPTION</p>
                </div>
                <div>
                    <h3>Rs. 533.00</h3>
                    <p>/ per month</p>
                </div>
                <div>
                    <p className="yellow">ONE TIME PAYMENT (11% OFF)</p>
                    <h3>Rs. 1,599.00  </h3>
                </div>
                <Link to="/productsdetails"><div className="subs_btn">
                    <button>ADD TO CART</button>
                </div></Link>
            </div>
        </div>
    )
}
