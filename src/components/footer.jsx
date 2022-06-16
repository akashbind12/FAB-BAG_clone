import "../css/footer.css";
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube} from 'react-icons/bs';


export const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footer">
        <div className="details">
          <p style={{
                color: "black",
                fontSize: "larger"
            }}>
            INFORMATION
          </p>
          <p> About Us</p>
          <p>Associated</p>
          <p>FAQ</p>
          <p>Collaborative with Fab Bag</p>
          <p>Contact Us</p>
          <p>Returns & Refunds</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="details">
          <p 
          style={{ 
          color: "black", 
          fontSize: "larger", 
          cursor: "default" 
          }}>
            CUSTOMER CARE
          </p>
          <p style={{ marginBottom: "-15px" }}>Call : 022-6805-6010 </p>
          <p>(Monday to Friday : 9 AM - 7 PM).</p>
          <p>Mail : crew@fabbag.com</p>
        </div>
        <div className="details">
          <p style={{ 
          color: "black", 
          fontSize: "larger" 
          }}>
          NEWSLETTER</p>
          <p style={{
            fontSize: "13px",
          }}>Signup for the latest offers, updates and news</p>
          <div className="subscribediv">
            <input
              type="text"
              className="subscribe_input"
              placeholder="Your email address"
            />
            <button className="subscribe_btn">SUBSCRIBE</button>
            </div>
            <div>
            <p style={{ color: "grey" ,
             fontSize: "13px",
             textAlign: "left",
             paddingLeft : "50px"
            }}>
            Don’t worry we don’t spam</p>
          
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex",
         marginLeft: "39%" 
         }}>
          <div id="facebook">
          <FaFacebookF></FaFacebookF>
          </div>
          <div id="twitter">
           <BsTwitter></BsTwitter>
            </div>
          <div id="instagram">
            <BsInstagram></BsInstagram>
            </div>
            <div id="youtube">
            <BsYoutube></BsYoutube>
            </div>
           
        </div>
        <div>
            <p style={{
                margin : "20px ",
                color : "gray",
                fontWeight : "500",
                fontSize : "18px"
           }}>Copyright © 2021 fabbag.com All rights reserved.</p>
            </div>
      </div>
    </div>
  );
};