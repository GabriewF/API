// Import's
import { Hono } from 'hono';
import { DateTime } from 'luxon';

// App (Hono)
const app = new Hono();

// Routes
app.get('/:timestamp/:locale?', (c) => {
  const date = Number(c.req.param('timestamp'));
  const locale = c.req.param('locale');
    
  const relative = DateTime
    .fromMillis(date)
    .toRelative({ locale });

  return c.body(relative);
});

// Export
export default app;