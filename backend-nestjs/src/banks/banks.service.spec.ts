import { Test, TestingModule } from '@nestjs/testing';
import { BanksService } from './banks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Bank } from './entities/bank.entity';
import { Model } from 'mongoose';

const mockBank = {
  _id: '123',
  ispb: '00000000',
  code: 1,
  name: 'Banco Teste',
  fullName: 'Banco Teste S.A.',
  status: 'ativo',
};


describe('BanksService', () => {
  let service: BanksService;
  let model: Model<Bank>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BanksService,
        {
          provide: getModelToken(Bank.name),
          useValue: {
            create: jest.fn().mockResolvedValue(mockBank),
            find: jest.fn().mockResolvedValue([mockBank]),
            findById: jest.fn().mockResolvedValue(mockBank),
            findByIdAndUpdate: jest.fn().mockResolvedValue(mockBank),
            findByIdAndDelete: jest.fn().mockResolvedValue(mockBank),
          },
        },
      ],
    }).compile();

    service = module.get<BanksService>(BanksService);
    model = module.get<Model<Bank>>(getModelToken(Bank.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a bank', async () => {
    const result = await service.create(mockBank);
    expect(result).toMatchObject(mockBank);

  });


});
