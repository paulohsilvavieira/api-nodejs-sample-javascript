import express from 'express';

const app = express();

app.use(express.json());

// eslint-disable-next-line arrow-body-style
app.post('/', (request, response) => {
  return response.status(200).json({
    msg: 'Hello World',
  });
});

export default app;
