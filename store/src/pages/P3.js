import Five from '../images/5.png'
import NavbarComponent from '../components/Navbar';

export default function P1() {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            

            <div className="display">
                <div className="left">
                    <img src="https://greeneryunlimited.co/cdn/shop/products/Wythe-40-2970.040-WH_Bird-of-Paradise-14.jpg?v=1618949230"
                        alt="plant_image" />
                </div>
                <div className="right">
                    <h1>
                    BIRD OF PARADISE
                    </h1>
                    <p>These regal plants (for
which they are named, reginae) are named for the beautiful, orange crane-like
flowers that they produce, like birds of paradise. They are known for bright
orange-blue colors, however, there are also white birds of paradise. Under the
right conditions, including full, southern light exposure, proper humidity, and
temperature, Bird of Paradise may flower indoors, although this is rare.</p>
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