import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export const EntrySchemaName: string = 'Entry';
export const EntrySchema: Schema = new Schema({
 _id: {
    default: uuid,
    required: true,
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
