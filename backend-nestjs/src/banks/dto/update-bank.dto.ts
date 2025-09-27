import { IsString, IsNumber, IsIn, Length, Matches, IsOptional } from 'class-validator';

export class UpdateBankDto {
  @IsOptional()
  @IsString()
  @Length(8, 8, { message: 'O ISPB deve ter exatamente 8 dígitos.' })
  @Matches(/^\d{8}$/, { message: 'O ISPB deve conter apenas números.' })
  ispb?: string;

  @IsOptional()
  @IsNumber({}, { message: 'O código deve ser um número.' })
  code?: number;

  @IsOptional()
  @IsString()
  @Length(2, 50, { message: 'O nome deve ter entre 2 e 50 caracteres.' })
  name?: string;

  @IsOptional()
  @IsString()
  @Length(2, 100, { message: 'O nome completo deve ter entre 2 e 100 caracteres.' })
  fullName?: string;

  @IsOptional()
  @IsString()
  @IsIn(['ativo', 'inativo'], { message: 'O status deve ser "ativo" ou "inativo".' })
  status?: string;
}
