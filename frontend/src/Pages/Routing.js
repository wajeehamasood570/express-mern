import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './Home'
import Booklist from './Booklist'
import Addbook from './Addbook'
import NavBar from '../Components/NavBar'
import Posts from './Posts';
import Comments from './Comments';
import SingleBlog from './SingleBlog';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<Booklist />} />
                    <Route path="/add" element={<Addbook/>} />
                    <Route path="/:id" element={<SingleBlog/>} />
                  
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
