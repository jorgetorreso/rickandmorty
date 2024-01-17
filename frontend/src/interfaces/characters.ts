export interface ICharacter {
  type: string;
  gender: string;
  image: string;
  id: number;
  name: string;
  status: string;
  species: string;
}

export interface IFilters {
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}

export interface IFilterOption { type: string, value: string }

