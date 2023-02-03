import { serve } from 'https://deno.land/std@0.176.0/http/server.ts';
import { Hono } from 'https://deno.land/x/hono@v2.7.5/mod.ts';

const app = new Hono();

import TimeRoute from './routes/time/index.ts';

app.get('/', (c) => c.text('Hello! Hono!'));
app.route('/time', TimeRoute);

serve(app.fetch);