import Five from '../images/5.png'
import NavbarComponent from '../components/Navbar';

export default function P1() {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            

            <div className="display">
                <div className="left">
                    <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/1/5/0/CI_Costa-Farms_Spathiphyllum-Sensation.jpg.rend.hgtvcom.616.616.suffix/1515164846613.jpeg"
                        alt="plant_image" />
                </div>
                <div className="right">
                    <h1>
                    Peace lily
                    </h1>
                    <p>The peace lily plant is well known for its air-purifying abilities as a houseplant; it’s great at
breaking down and neutralizing toxic gases like carbon monoxide and formaldehyde. Peace
lilies also make an ideal gift plant, in part because of their friendly name but also because
they are so easy to keep alive — when you give a peace lily, rest assured that you’re not
giving a gift that will become a burden.
</p>
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