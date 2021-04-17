import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button, Image, ListGroup, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import products from '../products'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})//[name of state, function to manipulate state]

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }

        fetchProduct()
    }, [])

    // const product = products.find(p => p._id === match.params.id)
    return (
        <>
        <Row className='my-3'>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card className='rounded'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <button className='btn btn-dark btn-block' type='button'
                            disabled={product.countInStock === 0}>Add To Cart</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
        </>
    )
}

export default ProductScreen
 