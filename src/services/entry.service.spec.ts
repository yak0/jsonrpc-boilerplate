import 'mocha';
import sinon, { SinonMock } from 'sinon';
import 'sinon-mongoose';
import { EntryService } from './entry.service';
import { Entry } from '../models';
import {
  CreateEntryParams,
  UpdateEntryParams,
  DeleteEntryParams,
  GetEntriesParams,
  GetEntryParams,
} from '../params';

let entryService: EntryService;
let entryMock: SinonMock;

describe('Entry Service', () => {

  before(() => {
    entryService = new EntryService();
    entryMock = sinon.mock(Entry);
  });

  beforeEach(()  => {
    entryMock.restore();
  });

  describe('Entry Service', () => {
    it('should create an entry', async () => {
      const params: CreateEntryParams = { title: 'test title', content: 'test content' };
      entryMock
        .expects('create')
        .withArgs(params)
        .resolves();
      entryService.create(params);
      entryMock.verify();
    });

    it('should update the entry', async () => {
      const params: UpdateEntryParams = { id: 'uuid', title: 'update title', content: 'update content' };
      entryMock
        .expects('findByIdAndUpdate')
        .withArgs(params.id, params, { new: true })
        .resolves();
      entryService.updateOne(params);
      entryMock.verify();
    });

    it('should delete the entry', async () => {
      const params: DeleteEntryParams = { id: 'uuid' };
      entryMock
        .expects('findByIdAndRemove')
        .withArgs(params.id)
        .resolves();
      entryService.delete(params.id);
      entryMock.verify();
    });

    it('should get the entry', async () => {
      const params: GetEntryParams = { id: 'uuid' };
      entryMock
        .expects('findById')
        .withArgs(params.id)
        .resolves();
      entryService.findOne(params.id);
      entryMock.verify();
    });

    it('should get entries', async () => {
      const params: GetEntriesParams = { take: 10, skip: 0};
      entryMock
        .expects('find')
        .chain('limit')
        .withArgs(params.take)
        .chain('skip')
        .withArgs(params.skip)
        .chain('exec')
        .resolves();
      entryService.find(params);
      entryMock.verify();
    });
  });
});
