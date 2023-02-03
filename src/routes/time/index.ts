// Import's
import { Hono } from 'hono';

// App (Hono)
const app = new Hono();

// Routes
import RelativeRoute from './relative.ts';

// Route Routes
app.route('/relative', RelativeRoute);

// Export
export default app;