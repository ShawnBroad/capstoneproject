import express from 'express';
import  mongoose  from 'mongoose';
import cors from 'cors';
import  {Server}  from 'socket.io';
import {createServer} from 'http';




const app = express();
const CONNECTION_URL = "mongodb+srv://arrayclass:array123@cluster0.wyyr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/posts', (req, res) => {
    const body = req.body;

    res.status(200).json({
        body
    });
})



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));