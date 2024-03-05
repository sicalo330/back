import express from 'express';
import mongoose from 'mongoose';

mongoose.connect()

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(4040, () => {
    console.log('Server is running on port 4040');
});
