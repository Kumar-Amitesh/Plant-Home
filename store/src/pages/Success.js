import payment from "../images/payment_tick.jpeg"
import NavbarComponent from "../components/Navbar";
import Five from "../images/5.png"
import { Link } from "react-router-dom"
function Success() {
    return (
        <div>
            <NavbarComponent />
            <div className="ui main">
                <img src={payment} alt="" className="center" />
                <br/><br/>
                <p>Thank you for buying plant. The nature is grateful to you.<br/> Now that
                    your order is confirmed it will be ready to ship in 2 days. <br/>
                    Please check your
                    inbox in the future for your order updates.
                </p>
                <br/>
                <div id="btn">
                <Link to="/store"><button className="positive ui button">Back to Shopping</button></Link>
                </div>
                <br/>
                <div id="print">
                    <button style={{textDecoration: "underline", color:"green",
                    border:"none",
                    backgroundColor:"white",paddingBottom:"5.5em"}}>Print receipt</button>
                </div>
            </div>
            <footer id="contact">
                <div className="footer">
                    <div className="left">
                        <img src={Five} alt="" />
                        <p>Your Haven, Enriched with Nature's Glow for Ultimate Wellbeing.</p>
                    </div>
                    <div className="right">
                        <ul>
                            <li style={{color: "green", paddingBottom: "1vw",
                        fontWeight: "500",
                        fontSize: "1vw"
                         }}>Discovery</li>
                            <li>New Season</li>
                            <li>Most searched</li>
                            <li>Most selled</li>
                        </ul>
                        <ul>
                            <li style={{color: "green", paddingBottom: "1vw",
                        fontSize: "1vw"}}>About</li>
                            <li>Help</li>
                            <li>Shipping</li>
                            <li>Affiliate</li>
                        </ul>
                        <ul>
                            <li style={{color: "green", paddingBottom: "1vw",
                        fontSize: "1vw"
                        }}>Info</li>
                            <li>Contact us</li>
                            <li>Privacy Policies</li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Success;