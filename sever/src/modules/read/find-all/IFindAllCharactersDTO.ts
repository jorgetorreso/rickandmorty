import { IFilters } from "../../../adapters/externalApi/IRickAndMorty";

export interface IFindAllCharactersDTO {
    filter?: IFilters;
    userId: string;
}