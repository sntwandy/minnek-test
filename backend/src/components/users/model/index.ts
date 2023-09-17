/**
 * DB Model to Users
 */

import { Schema, model, Document } from 'mongoose';

const mySchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: 'users' },
);

export interface User extends Document {
  email: string;
  password: string;
}

const myModel = model<User>('User', mySchema);

export default myModel;
