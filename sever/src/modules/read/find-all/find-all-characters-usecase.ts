import { IRickAndMortyApi, RickAndMortyApi } from "../../../adapters/externalApi/RickAndMortyApi";
import { CharacterEntity } from "../../../entities/Character";
import { IFavoriteRepository } from "../../../repositories/IFavoriteRepository";
import { IFindAllCharactersDTO } from "./IFindAllCharactersDTO";

export class FindAllCharactersUseCase {
    constructor(private rickAndMortyApi: IRickAndMortyApi, private favoriteRepository: IFavoriteRepository) { }

    async execute({ filter, userId }: IFindAllCharactersDTO): Promise<CharacterEntity[]> {
        // Hacer la llamada a la API externa para obtener todos los personajes con el filtro
        const characters = await this.rickAndMortyApi.getAllCharacters(filter);

        console.log(userId);

        // Lógica para determinar si cada personaje es favorito
        const userFavorites = await this.favoriteRepository.findByUserId(userId);

        // Marca los personajes como favoritos o no
        const charactersWithFavorites = characters.map((character: CharacterEntity) => {
            const isFavorite = userFavorites.some((favorite) => favorite.characterId === character.id.toString());
            character.isFavorite = isFavorite;
            return character;
        });

        return charactersWithFavorites;
    }
}