import { MethodInterface } from '../interfaces';
import { DeleteEntryParams } from '../params';
import { EntryService } from '../services';
import { EntryModel } from '../models';

export class DeleteEntryMethod implements MethodInterface {
  public async invoke(params: DeleteEntryParams): Promise<EntryModel> {
    return EntryService.getInstance().delete(params.id);
  }
}
