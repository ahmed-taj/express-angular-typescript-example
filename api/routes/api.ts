import { Router, Response, Request } from 'express';

const ApiRouter: Router = Router();

ApiRouter.get('/', (request: Request, response: Response) => {
  response.send('API works');
});

export { ApiRouter }
