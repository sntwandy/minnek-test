/**
 * DB Model to Dog
 */

import { Schema, model, Document } from 'mongoose';

const mySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    subBreeds: {
      type: [String],
      required: false,
    }
  },
  { collection: 'dogs' },
);

export interface Dog extends Document {
  name: string;
  breed: string;
  subBreed: string[];
}

const myModel = model<Dog>('Dog', mySchema);

export default myModel;
