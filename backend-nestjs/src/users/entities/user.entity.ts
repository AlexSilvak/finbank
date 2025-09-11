import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

// Aqui definimos o tipo de documento
export type UserDocument = User & Document;

// Criamos o schema
export const UserSchema = SchemaFactory.createForClass(User);
