import { IsNumber, IsString } from "class-validator";

export class CreatePokemonDto {

   @IsString()
   readonly  name: string;

   @IsNumber()
   readonly pokdexNumer: number;

   @IsNumber()
   readonly generation: number;

   @IsString()
   readonly  type: string;

   @IsString()
   readonly  weather: string;
};