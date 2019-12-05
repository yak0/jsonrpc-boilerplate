import { MethodInterface } from '../interfaces';
import { UpdateEntryParams } from '../params';
import { EntryService } from '../services';
import { EntryModel } from '../models';

export class UpdateEntryMethod implements MethodInterface {
  public async invoke(params: UpdateEntryParams): Promise<EntryModel> {
    return EntryService.getInstance().updateOne(params);
  }
}
