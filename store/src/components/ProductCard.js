// sk-zXvs662152d00aee55173
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={product.image} title='' alt=''
                onError={(e) => {
                    console.log(e);
                    e.target.src = 'https://via.placeholder.com/150';
                }}/>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link to={`/${product.link}`}>
                    <Card.Text><Card.Link href="">Know More</Card.Link></Card.Text>
                </Link>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;