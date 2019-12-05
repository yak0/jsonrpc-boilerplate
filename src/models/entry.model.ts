import { Document, model } from 'mongoose';
import { EntrySchemaName, EntrySchema } from '../schemas';

export interface EntryModel extends Document {
  title: string;
  content: string;
}
export const Entry = model<EntryModel>(EntrySchemaName, EntrySchema);
