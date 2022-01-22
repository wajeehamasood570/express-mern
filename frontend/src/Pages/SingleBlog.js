import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../store/actions';
import { useParams } from 'react-router'
import { Container, Col, Row } from 'react-bootstrap';


const SingleBlog = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooks())
    }, [])

    const books = useSelector((state) => state.books);
    const { id } = useParams();

    const record = books.find(item => item.id == id)
    console.log(record);

    const remain = books.find(item => item.id !== id)
    console.log(remain);


    return <div>

        <Container className='singleblog'>
            <Row>
                <Col xs={12} md={8} lg={8}>
                    <img width='100%' height='100%' src={record.img} />
                    <h3> {record.title}</h3>
                    <h3> {record.author}</h3>
                    {/* <h3> {record.price}</h3> */}
                </Col>

                          <Col xs={12} md={4} lg={4}>
                          <img width='80%' height='50%' src={remain.img} />
                          <h3> {remain.title}</h3>
                          <h3> {remain.author}</h3>
                          {/* <h3> {record.price}</h3> */}
                      </Col>
              
           


            </Row>


        </Container>
    </div>
};

export default SingleBlog;
