import 'mocha';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { EntryService } from '../services';
import { UpdateEntryMethod } from './update-entry.method';
import { UpdateEntryParams } from '../params';
chai.should();
chai.use(sinonChai);
const expect = chai.expect;
const method: UpdateEntryMethod = new UpdateEntryMethod();

describe('UpdateEntryMethod', () => {
  after(() => {
    sinon.restore();
  });

  it('should trigger updateOne method of the service', async () => {
    const params: UpdateEntryParams = { id: 'uuid', title: 'test title', content: 'test content' };
    const spy = sinon.spy(EntryService.getInstance(), 'updateOne');
    method.invoke(params);
    // tslint:disable-next-line: no-unused-expression
    expect(spy).to.have.been.calledWith(params);
  });
});
