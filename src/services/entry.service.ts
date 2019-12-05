import { EntryModel, Entry } from '../models';
import { CreateEntryParams, GetEntriesParams } from '../params';

export class EntryService {
  private static instance: EntryService;
  public static getInstance(): EntryService {
    if (!EntryService.instance) {
      EntryService.instance = new EntryService();
    }

    return EntryService.instance;
  }

  public static mock(mockedInstance: EntryService) {
    EntryService.instance = mockedInstance;
  }

  public async create(params: CreateEntryParams): Promise<EntryModel> {
    return Entry.create(params);
  }

  public async updateOne(params: any): Promise<EntryModel> {
    return Entry.findByIdAndUpdate(params.id, params, { new: true });
  }

  public async delete(id: string): Promise<EntryModel>  {
    return Entry.findByIdAndRemove(id);
  }

  public async find(params: GetEntriesParams): Promise<EntryModel[]>  {
    return Entry.find()
      .limit(params ? params.take || 10 : 10)
      .skip(params ? params.skip || 0 : 0)
      .exec();
  }

  public async findOne(id: string): Promise<EntryModel>  {
    return Entry.findById(id);
  }
}
