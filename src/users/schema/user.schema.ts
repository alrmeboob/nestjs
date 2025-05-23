import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class User 
{
  @Prop({ required: true })
  full_name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  countryName?: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User)
