import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hehe hooks hey heya');
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`listening on port ${process.env.SERVER_PORT}`);
});