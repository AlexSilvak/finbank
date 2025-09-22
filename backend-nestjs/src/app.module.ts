import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BanksModule } from './banks/banks.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { MovementsModule } from './movements/movements.module';
import { CategoriesModule } from './categories/categories.module';
import { GoalsModule } from './goals/goals.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/finbank'), // seu banco
    UsersModule, BanksModule, TransactionsModule, AccountsModule, MovementsModule, CategoriesModule, GoalsModule, ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
