import React, { useEffect } from 'react'
import { Container, Button, Col, Card, Row } from 'react-bootstrap'
import bookData from './Bookapi'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooks } from '../store/actions';



const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooks())
    }, [])

    const books = useSelector((state) => state.books);

    return (
        <>
            <Container>
                <h2 className="sub-header mt-5">Blog App</h2>

                <Row className='blogs'>


                    {books.map((output, index) =>
                        <Col xs={6} md={4} lg={4}>
                            <Link style={{textDecoration:'none'}} to={`${output.id}`}>
                            <h3 key={index}> </h3>
                            {output.activeId}
                            <img width='90%' height='200px' src={output.img} />
                            <h4>{output.title}</h4>
                            <p> {output.author}</p>
                            </Link>
            </Col>
                        )}




        </Row>

            </Container >
        </>

    )
}



export default Home
