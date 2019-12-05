import { MethodInterface } from '../interfaces';
import { CreateEntryParams } from '../params';
import { EntryService } from '../services';
import { EntryModel } from '../models';

export class CreateEntryMethod implements MethodInterface {
  public async invoke(params: CreateEntryParams): Promise<EntryModel> {
    return EntryService.getInstance().create(params);
  }
}
