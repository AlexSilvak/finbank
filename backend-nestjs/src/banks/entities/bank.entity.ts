import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Bank {
  @Prop({ required: true, unique: true })
  ispb: string; // Identificador BACEN (8 dígitos)

  @Prop({ required: true, unique: true })
  code: number; // Código COMPE (3 dígitos)

  @Prop({ required: true })
  name: string; // Nome curto (ex: Banco do Brasil)

  @Prop({ required: true })
  fullName: string; // Nome completo (ex: Banco do Brasil S.A.)

  @Prop({ required: true, enum: ['ativo', 'inativo'], default: 'ativo' })
  status: string; // ativo / inativo
}

// Tipo do documento
export type BankDocument = Bank & Document;

// Criação do schema
export const BankSchema = SchemaFactory.createForClass(Bank);
