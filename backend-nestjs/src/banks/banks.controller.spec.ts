import { Test, TestingModule } from '@nestjs/testing';
import { BanksController } from './banks.controller';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

const mockBank = {
  _id: 'abc123',
  ispb: '00000000',
  code: 1,
  name: 'Banco Teste',
  fullName: 'Banco Teste S.A.',
  status: 'ativo',
};

describe('BanksController', () => {
  let controller: BanksController;
  let service: BanksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanksController],
      providers: [
        {
          provide: BanksService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockBank),
            findAll: jest.fn().mockResolvedValue([mockBank]),
            findOne: jest.fn().mockResolvedValue(mockBank),
            update: jest.fn().mockResolvedValue(mockBank),
            remove: jest.fn().mockResolvedValue(mockBank),
          },
        },
      ],
    }).compile();

    controller = module.get<BanksController>(BanksController);
    service = module.get<BanksService>(BanksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a bank', async () => {
    const dto: CreateBankDto = {
      ispb: '00000000',
      code: 1,
      name: 'Banco Teste',
      fullName: 'Banco Teste S.A.',
      status: 'ativo',
    };
    const result = await controller.create(dto);
    expect(result).toEqual(mockBank);
  });

 
  
});
