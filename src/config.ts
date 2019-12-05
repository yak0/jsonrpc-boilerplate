import { ConfigInterface } from './interfaces';
import {
  CreateEntryMethod,
  UpdateEntryMethod,
  DeleteEntryMethod,
  GetEntryMethod,
  GetEntriesMethod,
} from './methods';
import {
  CreateEntryParams,
  UpdateEntryParams,
  DeleteEntryParams,
  GetEntryParams,
  GetEntriesParams,
} from './params';

export const config: ConfigInterface = {
  port: 3000,
  mongodb: 'mongodb://mongo:27017/mydb',
  rpcEndPoint: '/rpc',
  methods: [
    { name: 'createEntry', method: CreateEntryMethod, params: CreateEntryParams },
    { name: 'updateEntry', method: UpdateEntryMethod, params: UpdateEntryParams },
    { name: 'deleteEntry', method: DeleteEntryMethod, params: DeleteEntryParams },
    { name: 'getEntry', method: GetEntryMethod, params: GetEntryParams },
    { name: 'getEntries', method: GetEntriesMethod, params: GetEntriesParams },
  ],
  validatorOptions: {
    validationError: { target: false },
  },
};
