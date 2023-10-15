import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';

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

  async findAll(
    page: number = 1,
    limit: number = 10,
    search?: string,
    name?: string,
    type?: string,
    weather?: string,
    familyId?: number,
    generation?: number
  ): Promise<Pokemon[]> {
    const queryBuilder = this.pokemonRepository.createQueryBuilder('pokemon');

    // Apply search filter
    if (search) {
      queryBuilder.andWhere(
        new Brackets((qb) => {
          qb.where('pokemon.name ILIKE :search', { search: `%${search}%` });
          qb.orWhere('pokemon.type ILIKE :search', { search: `%${search}%` });
          qb.orWhere('pokemon.weather ILIKE :search', { search: `%${search}%` });
        })
      );
    }

    // Apply individual filters
    if (name) {
      queryBuilder.andWhere('pokemon.name ILIKE :name', { name: `%${name}%` });
    }
    if (type) {
      queryBuilder.andWhere('pokemon.type ILIKE :type', { type: `%${type}%` });
    }
    if (weather) {
      queryBuilder.andWhere('pokemon.weather ILIKE :weather', {
        weather: `%${weather}%`,
      });
    }
    if (familyId) {
      queryBuilder.andWhere('pokemon.familyID = :familyId', { familyId });
    }
    if (generation) {
      queryBuilder.andWhere('pokemon.generation = :generation', { generation });
    }

    const [results, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return results;
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
