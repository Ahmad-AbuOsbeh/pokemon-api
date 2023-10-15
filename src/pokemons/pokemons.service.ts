import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository :Repository<Pokemon>
    ){}

  async create( createPokemonDto: CreatePokemonDto) {    
    const pokemon = this.pokemonRepository.create(createPokemonDto)
    return this.pokemonRepository.save(pokemon);
  }

  async findAll(): Promise<Pokemon[]>{
    return await this.pokemonRepository.find();
  }

  async findOne( id: number) : Promise<Pokemon>{
    const pokemon = await this.pokemonRepository.findOne({
      where:{id}
    });

    if (!pokemon) {
      throw new NotFoundException(`This pokemon : ${id} not found`);
    }
    return pokemon;
  }

  async update(id: number, updatePokemonDto: UpdatePokemonDto) {
    const updatePokemon = await this.pokemonRepository.preload({
      id: id,
      ...updatePokemonDto})
    if (!updatePokemon) {
    throw new NotFoundException(`This Pokemon : ${id} not found`);
    }
    return this.pokemonRepository.save(updatePokemon);
  }

  async remove(id: number) {
    await this.pokemonRepository.delete(id);
  }
}
