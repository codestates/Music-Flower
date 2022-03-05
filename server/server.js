const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require('./models');

const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const spotifyRouter = require('./router/spotifyRouter');

sequelize.sync({ force: false })
.then(()=> {
  console.log('데이터베이스 연결');
}).catch((err)=> {
  console.error(err);
})

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
