import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../components/exploreProduct';
import ExploreProductCard from '../components/ExploreProductCard';
import NavbarComponent from '../components/Navbar';
import Five from '../images/5.png'
function Explore() {

    return (
        <>
            <NavbarComponent></NavbarComponent>
            {/* <h1 align="center" classNameName="p-3">Welcome to the store!</h1> */}
            {/* <div id="main">
                <div id="landingpage"> */}
                    {/* <div id="nav">
                        <a href="#landingpage"><img src="Logo.png" alt=""/>plant home</a>
                        <div id="links">
                            <a href="#product">Discovery</a><a href="#about">About us</a><a href="#contact">Contact Us</a>
                        </div>
                        <div id="icons">
                            <a href=""><i className="ri-user-line"></i>
                            </a>
                            <a href=""><i className="ri-shopping-cart-line"></i>
                            </a>
                        </div>
                    </div> */}
                    {/* <div id="box">
                        <img src={Group} alt="" />
                        <a href="#product"><button>Discover Our Collection</button></a>
                    </div>
                </div>
                <div className="page2" id="product">
                    <div className="title">
                        <h1>Products</h1>
                        <p>Order it for you or for your beloved ones</p>
                    </div>
                </div>
            </div>
            <br/><br/> */}
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ExploreProductCard product={product} />
                    </Col>
                ))}
            </Row>
            {/* <br/>
            <div className="ui right floated buttons">
                    <button className="ui positive button">Explore More</button>
            </div> */}
            {/* <br/> */}
            {/* <div className="page3" id="about">
                <div className="content" >
                    <div className="left">
                        <h1>
                            Plant Home
                        </h1>
                        <p style={{color: "green"}}>
                            Where Every Leaf Tells a Story and Every Corner Breathes Life
                        </p>
                        <ul>
                            <li><i className="ri-checkbox-circle-line"></i> Indoor Plants: Nature, Air, Visual, Calm.</li>
                            <li><i className="ri-checkbox-circle-line"></i> Natural Light: Maximize natural light for openness.
                            </li>
                            <li><i className="ri-checkbox-circle-line"></i> Biophilic Design: Design with nature's essence
                                indoors.</li>
                            <li><i className="ri-checkbox-circle-line"></i> Indoor Water: Serenity flows home.</li>
                        </ul>
                        <button>Learn More</button>
                    </div>
                    <img src={Candle} alt="" />
                </div>
            </div>
            <div className="page4">
                <div className="testimonial">
                    <div className="text">
                        <h1>Testimonial</h1>
                        <p>Some quotes from our happy customers</p>
                    </div>
                    <div className="customcard">
                        <div className="custom">
                            <img width="100px" src={bgdp} alt="" />
                            <div style={{color: "green", display: "flex", gap: "2px"}} className="star"><i className="ri-star-fill"></i><i
                                className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                    className="ri-star-fill"></i>
                            </div>
                            <p>"I Love it! No more air fresheners"</p>
                            <h4>Vatsal</h4>
                        </div>
                        <div className="custom">
                            <img width="100px" src={bg} alt="" />
                            <div style={{color: "green", display: "flex", gap: "2px"}} className="star"><i className="ri-star-fill"></i><i
                                className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                    className="ri-star-fill"></i>
                            </div>
                            <p>"Recommended for everyone"</p>
                            <h4>Amitesh</h4>
                        </div>
                        <div className="custom">
                            <img width="100px" src={bgdp2} alt="" />
                            <div style={{color: "green", display: "flex", gap: "2px"}} className="star"><i className="ri-star-fill"></i><i
                                className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i
                                    className="ri-star-fill"></i>
                            </div>
                            <p>"Awakens your senses and invites serenity"</p>
                            <h4>Akki</h4>
                        </div>
                    </div>
                </div>
            </div> */}
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
            
        </>
    )
}

export default Explore;