// netlify/functions/api.ts

import { Handler } from '@netlify/functions';
import serverlessExpress from 'serverless-http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let cachedHandler: Handler;

async function bootstrap(): Promise<Handler> {
  const expressApp = express();
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await nestApp.init();
  return serverlessExpress(expressApp);
}

export const handler: Handler = async (event, context) => {
  if (!cachedHandler) {
    cachedHandler = await bootstrap();
  }
  return cachedHandler(event, context);
};
import { readFileSync } from 'fs';
import { join } from 'path';

const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../../package.json'), 'utf8')
);
