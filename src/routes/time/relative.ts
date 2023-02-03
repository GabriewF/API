// Import's
import { Hono } from 'https://deno.land/x/hono@v2.7.5/mod.ts';
import { DateTime } from 'https://esm.sh/luxon@3.2.1';

// App (Hono)
const app = new Hono();

// Routes
app.get('/:timestamp/:locale?', (c) => {
  const date = Number(c.req.param('timestamp'));
  const locale = c.req.param('locale')
  
  const InputDate = new Date(date);
  const NowDate = new Date();

  const InputTimestamp = InputDate.getTime();
  const NowTimestamp = NowDate.getTime();

  if (isNaN(InputTimestamp)) c.text('Invalid timestamp!')

  const diffTime = Math.abs(NowTimestamp - InputTimestamp);
  const diff = DateTime.fromMillis(diffTime, { locale });

  return c.text(String(diff.toRelative()));
});

// Export
export default app;