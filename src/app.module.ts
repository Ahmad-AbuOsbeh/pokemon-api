import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      host: 'db',
      port: 5432, 
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      migrations: ["dist/migrations/*{.ts,.js}"],
      autoLoadEntities: true,
      synchronize: false,
    }),
    PokemonsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
