import { Controller,Get ,Post,Res,Body,HttpCode,HttpStatus} from '@nestjs/common';
import {CreateUserDto} from '../users/dto/create-user.dto'
import { UsersService } from './users.service';
import { Users } from './interfaces/users.interface';
import type { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
 async create(@Body()CreateUserDto:CreateUserDto,@Res()res:Response){
  const user=await this.usersService.create(CreateUserDto);
   return res.status(HttpStatus.CREATED).json({
      message: 'Usuário criado com sucesso',
      data: user,
    });
 }
 
 @Get()
 async findAll():Promise<Users[]>{
  return this.usersService.findAll()
 }


}
