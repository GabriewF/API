// Import's
import { Hono } from 'https://deno.land/x/hono@v2.7.5/mod.ts';

// Routes
import RelativeRoute from './relative.ts';

// App (Hono)
const app = new Hono();

// Route Routes
app.get('/', (c) => c.text('Hello Time'));
app.route('/relative', RelativeRoute);

// Export
export default app;