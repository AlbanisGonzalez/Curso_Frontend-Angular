
import { IFilm } from "./film.model"
export interface ICategory {
    id: number,
    fullName: string,
    color: string,
    minAge: number,
    // formato (enum)
    films?: IFilm[]
}