import { IsString, IsNumber, IsIn, Length, Matches } from 'class-validator';

export class CreateBankDto {
  @IsString()
  @Length(8, 8, { message: 'O ISPB deve ter exatamente 8 dígitos.' })
  @Matches(/^\d{8}$/, { message: 'O ISPB deve conter apenas números.' })
  ispb: string | number; // Identificador BACEN (8 dígitos)

  @IsNumber({}, { message: 'O código deve ser um número.' })
  code: string | number; // Código COMPE (3 dígitos)

  @IsString()
  @Length(2, 50, { message: 'O nome deve ter entre 2 e 50 caracteres.' })
  name: string; // Nome curto (ex: Banco do Brasil)

  @IsString()
  @Length(2, 100, { message: 'O nome completo deve ter entre 2 e 100 caracteres.' })
  fullName: string; // Nome completo (ex: Banco do Brasil S.A.)

  @IsString()
  @IsIn(['ativo', 'inativo'], { message: 'O status deve ser "ativo" ou "inativo".' })
  status: string; // ativo / inativo
}
