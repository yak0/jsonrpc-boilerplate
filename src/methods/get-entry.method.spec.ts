import 'mocha';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { EntryService } from '../services';
import { GetEntryMethod } from './get-entry.method';
import { GetEntryParams } from '../params';
chai.should();
chai.use(sinonChai);
const expect = chai.expect;
const method: GetEntryMethod = new GetEntryMethod();

describe('GetEntryMethod', () => {
  after(() => {
    sinon.restore();
  });

  it('should trigger findOne method of the service', async () => {
    const params: GetEntryParams = { id: 'uui' };
    const spy = sinon.spy(EntryService.getInstance(), 'findOne');
    method.invoke(params);
    // tslint:disable-next-line: no-unused-expression
    expect(spy).to.have.been.calledWith(params.id);
  });
});
