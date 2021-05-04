import * as express from "express";

export const pingController = express.Router();

pingController.get('/hello', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});
pingController.get('/', (_, res) => {
  res.status(200).json({
    status: true,
    message: 'Welcome to Birdie API 🏅'
  });
});
