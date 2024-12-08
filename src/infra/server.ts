import { app } from './app';
import { env } from './config/env';

app
  .listen({ port: env.PORT, host: 'localhost' })
  .then(() => console.log('Server is running'));
