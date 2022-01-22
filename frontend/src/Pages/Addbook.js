import React, { useState } from 'react'
import { Form, Button, Container, FormControl, InputGroup, ButtonGroup } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addBook, addBooks } from "../store/actions";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Addbook = () => {
    const books = useSelector((state) => state.books);
    const [title, settitle] = useState("");
    const [author, setauthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setimage] = useState("");
    const [activeId, setActiveId] = useState(0);
    const dispatch = useDispatch();


    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(books);
        axios.post('http://localhost:5000/books/add')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        handleClick();
        // const result = { activeId, image, title, author, category };
        // console.log(result);
        // dispatch(addBook(result));
        // console.log(activeId);
        // console.log(category);
        //{type:'ADDBOOK',payload}
    };




    const handleProductImgSelect = (e) => {
        const url = URL.createObjectURL(e?.target?.files[0]);
        setimage({
            name: e?.target?.files[0]?.name,
            url: url,
            file: e?.target?.files[0]
        })
    };
    return (
        <div>
            <Container>
                <br />
                <br />
                <Form method='POST' onSubmit={(e) => handleSubmit(e)} >
                    <h3>Add a new Book!</h3>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Book Image</Form.Label>
                        <br />
                        <input
                            type='file'
                            name=''
                            onChange={(e) => handleProductImgSelect(e)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Book Title:</Form.Label>
                        <input
                            name="title"
                            type="name"
                            value={books.title}
                            placeholder="Enter book name"
                            onChange={(e) => settitle(e.target.value)}
                        />


                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author Name:</Form.Label>
                        <input
                            name="author"
                            type="name"
                            value={books.author}
                            placeholder="Enter author name"
                            onChange={(e) => setauthor(e.target.value)}
                        />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Book category</Form.Label><br />
                        <ButtonGroup onChange={(e) => setCategory(e.target.value)}>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="html" className='radio'>HTML</label>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label for="css" className='radio'>CSS</label>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                            <label for="javascript" className='radio'>JavaScript</label>
                        </ButtonGroup>
                    </Form.Group>




                    <Button variant="primary" type="submit" onClick={() => {setActiveId(books.length + 1)}}>
                        Submit
                    </Button>


                </Form>
            </Container>
        </div>
    )
}

export default Addbook
