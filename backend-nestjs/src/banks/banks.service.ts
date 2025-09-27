import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank, BankDocument } from './entities/bank.entity';

@Injectable()
export class BanksService {
  constructor(
    @InjectModel(Bank.name) private readonly bankModel: Model<BankDocument>,
  ) {}
  // Regra: Deve existe validações para cada método. Exemplo: Ao inserir registros duplicados mostrar um mensagem de retorno na API.
  async create(createBankDto: CreateBankDto): Promise<Bank> {
    const createdBank = new this.bankModel(createBankDto);
    return createdBank.save();
  }

  async findAll(): Promise<Bank[]> {
    return this.bankModel.find().exec();
  }

  async findOne(id: string): Promise<Bank> {
    const bank = await this.bankModel.findById(id).exec();
    if (!bank) {
      throw new NotFoundException(`Bank with id ${id} not found`);
    }
    return bank;
  }

  async update(id: string, updateBankDto: UpdateBankDto): Promise<Bank> {
    const updatedBank = await this.bankModel
      .findByIdAndUpdate(id, updateBankDto, { new: true })
      .exec();

    if (!updatedBank) {
      throw new NotFoundException(`Bank with id ${id} not found`);
    }

    return updatedBank;
  }

  async remove(id: string): Promise<Bank> {
    const deletedBank = await this.bankModel.findByIdAndDelete(id).exec();
    if (!deletedBank) {
      throw new NotFoundException(`Bank with id ${id} not found`);
    }
    return deletedBank;
  }
}
