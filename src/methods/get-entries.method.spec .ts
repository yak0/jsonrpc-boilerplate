import 'mocha';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { EntryService } from '../services';
import { GetEntriesMethod } from './get-entries.method';
import { GetEntriesParams } from '../params';
chai.should();
chai.use(sinonChai);
const expect = chai.expect;
const method: GetEntriesMethod = new GetEntriesMethod();

describe('GetEntriesMethod', () => {
  after(() => {
    sinon.restore();
  });

  it('should trigger find method of the service', async () => {
    const params: GetEntriesParams = { take: 10, skip: 0 };
    const spy = sinon.spy(EntryService.getInstance(), 'find');
    method.invoke(params);
    // tslint:disable-next-line: no-unused-expression
    expect(spy).to.have.been.calledWith(params);
  });
});
