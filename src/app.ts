import express from 'express';
import bodyParser from 'body-parser';
import { RpcHandler } from './utils';
import { config } from './config';
import { connect } from 'mongoose';

async function bootstrap(): Promise<void> {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post(config.rpcEndPoint, RpcHandler.handleRequest);
  app.use (config.rpcEndPoint, RpcHandler.handleError);
  await connect(
    config.mongodb,
    {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
  );
  // tslint:disable-next-line: no-console
  app.listen(config.port, () => console.log(`JSON-RPC app listening on port ${config.port}`));
}

bootstrap();
