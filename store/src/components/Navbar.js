import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";
import CartProduct from './CartProduct';
import Logo from './Logo.png'

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                {/* <Navbar.Brand href="/">Plant Home</Navbar.Brand> */}
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Logo} alt=""/>plant home</Navbar.Brand>
                    </Container>
                </Navbar>
            <Navbar.Toggle />

                <div id="nav">
                    {/* <a href="#landingpage"><img src="Logo.png" alt=""/>plant home</a> */}
                    <div id="links">
                        <a href="#product">Discovery</a>
                        <a href="#about">About us</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                    {/* <div id="icons">
                        <a href=""><i class="ri-user-line"></i>
                        </a>
                        <a href=""><i class="ri-shopping-cart-line"></i>
                        </a>
                    </div> */}
                </div>

                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ? (
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct
                                    key={idx}
                                    id={currentProduct.id}
                                    quantity={currentProduct.quantity}
                                ></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                    ) : (
                        <h1>There are no items in your cart!</h1>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavbarComponent;