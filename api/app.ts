import * as express from 'express';
import { json } from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';

import { ApiRouter } from './routes/api';

const favicon = require('serve-favicon');

const app = express();

app.disable('x-powered-by');
app.use(json());
app.use(compression());

// API routes
app.use('/api', ApiRouter);


if (app.get('env') === 'production') {
  // Serve favicon
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  // In production mode run application from public folder
  app.use(express.static(path.join(__dirname, 'public')));

  // Catch all other routes and return the index file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

} else {
  // Enable CORS in development
  app.use(require('cors'));
}

// Catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
  next(new Error('Not Found'));
});

// Production error handler
// No stacktrace leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

console.log('Running in ' + app.get('env') + ' mode');
export { app }
