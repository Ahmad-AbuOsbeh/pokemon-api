import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Get()
  findAll(
    @Query('search') search: string,
    @Query('name') name: string,
    @Query('type') type: string,
    @Query('weather') weather: string,
    @Query('familyId') familyId: number,
    @Query('generation') generation: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.pokemonsService.findAll(
      page,
      limit,
      search,
      name,
      type,
      weather,
      familyId,
      generation
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonsService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonsService.remove(+id);
  }
}
