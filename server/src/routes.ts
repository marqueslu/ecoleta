import { Router } from 'express';

const routes = Router();

routes.get('/users', (request, response) => {
  response.json({ message: 'Hello World!' });
});

export default routes;
