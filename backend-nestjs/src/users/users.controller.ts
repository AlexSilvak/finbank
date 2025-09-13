import { Controller,Get ,Post,Put,Patch,Delete,Param,Body,HttpCode,HttpStatus} from '@nestjs/common';
import {CreateUserDto} from '../users/dto/create-user.dto'
import { UsersService } from './users.service';
import { Users } from './interfaces/users.interface';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(201)
 async create(@Body()CreateUserDto:CreateUserDto){
  const user=await this.usersService.create(CreateUserDto);
   return {
      message: 'Usuário criado com sucesso',
      data: user,
    }
 }
 
 @Get()
 async findAll():Promise<Users[]>{
  return this.usersService.findAll()
 }

 @Get(':id')
  async findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

@Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.remove(id);
    return {
      message: 'Usuário apagado com sucesso!',
    };
  }
 @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    return {
      message: 'Usuário atualizado com sucesso',
      data: updatedUser,
    };
  }
  @Patch(':id')
  async updatePartial(@Param('id') id: string, @Body() updateUserDto: Partial<CreateUserDto>) {
    const updatedUser = await this.usersService.updatePartial(id, updateUserDto);
    return {
      message: 'Usuário atualizado parcialmente com sucesso',
      data: updatedUser,
    };
  }

}
