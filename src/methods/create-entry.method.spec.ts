import 'mocha';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { EntryService } from '../services';
import { CreateEntryMethod } from './create-entry.method';
import { CreateEntryParams } from '../params';
chai.should();
chai.use(sinonChai);
const expect = chai.expect;
const method: CreateEntryMethod = new CreateEntryMethod();

describe('CreateEntryMethod', () => {
  after(() => {
    sinon.restore();
  });

  it('should trigger create method of the service', async () => {
    const params: CreateEntryParams = { title: 'test title', content: 'test content' };
    const spy = sinon.spy(EntryService.getInstance(), 'create');
    method.invoke(params);
    // tslint:disable-next-line: no-unused-expression
    expect(spy).to.have.been.calledWith(params);
  });
});
