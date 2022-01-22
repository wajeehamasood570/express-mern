// all book routes
const express = require('express');
const books = require('../data.js');
const router  = express.Router();

router.get('/', (req,res) => {
    // res.send(`all books list`);
    res
    .json(books)
    .status(200);
});

router.post('/add', (req,res) => {
    // const id = req.body.id;
    // const title = req.body.title;
    // const author = req.body.author;
    //    id:2,
    //    title:'qw',
    //    author:'qwerty'
    // const book = new books({
    //     id,
    //     title,author
    // });
    const book = req.body;
    books.push({...book});
    res
    .send(book);

    book.save()
.then(() => res.json(books, 'Book added'))
.catch((err) => res.status(400).json('Error' + err))
});






router.get('/:id', (req,res) => {
    const {id} = req.params;
    const filBook = books.filter(item => item.id == id);
    res.json(filBook);
    console.log(id);
})




module.exports = router;