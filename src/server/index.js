import express from 'express';
import path from 'path';
import renderLayout from './layout';

const app = express();
const port = 3000;

app.use('/images', express.static(path.resolve('src/public/images')));
app.use('/scripts', express.static(path.resolve('src/public/scripts')));

app.get('/', (req, res) => res.status(200).send(renderLayout())); // eslint-disable-line no-unused-vars

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(error); // eslint-disable-line no-console

  return res.status(500).send(error);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`'app-server' listening at 0.0.0.0:${port}`); // eslint-disable-line no-console
});
