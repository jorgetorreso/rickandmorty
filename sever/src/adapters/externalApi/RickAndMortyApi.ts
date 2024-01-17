import axios, { AxiosResponse } from 'axios';
import { IFilters } from './IRickAndMorty';
import { CharacterEntity } from '../../entities/Character';

export interface   IRickAndMortyApi {
  getAllCharacters(filter?: IFilters): Promise<CharacterEntity[]>;
}

export class RickAndMortyApi implements IRickAndMortyApi {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  async getAllCharacters(filter?: IFilters): Promise<CharacterEntity[]> {
    try {
      // Hacer la solicitud a la API externa con el filtro si está presente
      const response: AxiosResponse<any> = await axios.get(this.baseUrl, { params: filter });

      // Mapear la respuesta a instancias de CharacterEntity
      const characters: CharacterEntity[] = response.data.results;

      return characters;
    } catch (error) {
      // Manejar errores de la API externa según sea necesario
      console.error('Error al obtener personajes desde la API externa:', error?.message || error);
      throw new Error('Error al obtener personajes desde la API externa');
    }
  }
}
