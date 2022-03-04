const express = require("express");
const cors = require("cors");
const app = express();
const test = require('./test');

const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const spotifyRouter = require('./router/spotifyRouter');

app.use(test);

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/spotify', spotifyRouter);

app.get('/', (req, res) => {
  res.status(200).send('Beautiful Music Flower');
});

app.use((req, res, next)=> {
  res.status(404).send('Not Found!');
})
app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
})

app.listen(8080, () => console.log('server is running'));
