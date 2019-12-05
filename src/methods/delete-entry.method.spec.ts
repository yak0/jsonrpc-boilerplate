import 'mocha';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { EntryService } from '../services';
import { DeleteEntryMethod } from './delete-entry.method';
import { DeleteEntryParams } from '../params';
chai.should();
chai.use(sinonChai);
const expect = chai.expect;
const method: DeleteEntryMethod = new DeleteEntryMethod();

describe('DeleteEntryMethod', () => {
  after(() => {
    sinon.restore();
  });

  it('should trigger delete method of the service', async () => {
    const params: DeleteEntryParams = { id: 'uui' };
    const spy = sinon.spy(EntryService.getInstance(), 'delete');
    method.invoke(params);
    // tslint:disable-next-line: no-unused-expression
    expect(spy).to.have.been.calledWith(params.id);
  });
});
