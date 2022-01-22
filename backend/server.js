const express = require('express');
const cors = require('cors');
const bookRoute=  require('./routes/bookRoutes.js');
const app = express();

const PORT = 5000;
app.use(cors());

app.get('/', (req,res) => {
    res.send(`server is running at ${PORT}`);
});

app.get('/book', (req,res) => {
    res.send("hello")
});

app.use('/books', bookRoute)


app.listen(PORT, (req,res) => {
    console.log(`server is running at ${PORT}`);
})


