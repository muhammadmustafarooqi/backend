import express from 'express';
import dotenv from 'dotenv';
import ProductRoutes from './routes/ProductRoutes.js';
import comments from './comments.js';

dotenv.config();
const app = express();
app.use(express.json());




app.get('/', (req, res) => {
    res.status(200).send('Hello, Backend!');
    console.log(comments);
});

app.use('/product', ProductRoutes);


// app.use('/products', ProductRoutes);




// app.get('/profile', (req, res) => {
//     res.status(200).send('Profile Page');
// });

// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.status(200).send(`User ID: ${userId}`);
// });
// app.get('*', (req, res) => {
//     res.status(404).send('Page not found');
// });

// app.get('/comments', (req, res) => {
//    res.status(200).send({status:200, message: "you are succesfully logedin", data: comments});
// });


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
