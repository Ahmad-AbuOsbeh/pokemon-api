import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrations: ["src/migrations/*{.ts,.js}"],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PokemonsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
