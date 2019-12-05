import { MethodInterface } from '../interfaces';
import { GetEntryParams } from '../params';
import { EntryService } from '../services';
import { EntryModel } from '../models';

export class GetEntryMethod implements MethodInterface {
  public async invoke(params: GetEntryParams): Promise<EntryModel> {
    return EntryService.getInstance().findOne(params.id);
  }
}
