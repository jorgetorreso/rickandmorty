export class CharacterEntity {
    type: string;
    gender: string;
    image: string;
    id: number;
    name: string;
    status: string;
    species: string;
    isFavorite: boolean;

    // Método para agregar el flag de favorito
    setFavorite(isFavorite: boolean) {
        this.isFavorite = isFavorite;
    }
}