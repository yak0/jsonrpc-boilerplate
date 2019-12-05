import { MethodInterface } from '../interfaces';
import { GetEntriesParams } from '../params';
import { EntryService } from '../services';
import { EntryModel } from '../models';

export class GetEntriesMethod implements MethodInterface {
  public async invoke(params: GetEntriesParams): Promise<EntryModel[]> {
    return EntryService.getInstance().find(params);
  }
}
