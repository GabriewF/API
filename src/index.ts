// Import's
import { Hono } from 'hono';
import { serve } from 'server';

// App
const app = new Hono();

// Routes
import TimeRoute from '@routes/time/index.ts';

// (/) Routes
app.get('/', c => c.json({
  date: new Date(),
  status: 200,
  statusText: 'OK',
  message: 'Hello World!'
}));

// (/time) Routes
app.route('/time', TimeRoute);

// (404) Not Found
app.notFound(c => c.json({
  date: new Date(),
  status: 404,
  statusText: 'Not Found',
}));

// (500) Internal Server Error
app.onError((err, c) => c.json({
  date: new Date(),
  status: 500,
  statusText: 'Internal Server Error',
  error: {
    name: err.name,
    message: err.message,
    cause: err.cause,
    stack: err.stack
  }
}));

// Serve app
serve(app.fetch);