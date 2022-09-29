/* export type genre = 'Action' | "Animation" | "Biopic" | "Cartoon" | "Comedy" | "Documentary" | "Drama" | "Educational" |
    "Fantasy" | "Film noir" |"Historical"| "Horror"| "Martial arts" | "Musical "| "Romantic" | "Scary" | "Science fiction " | "Silent" | "Thriller" |
    "War" | "Western" */

/* export type ObjectName = {
    id: number,
    name: string,
} */

export interface IMovies {
    id: number,
    title: string,
    is3D: boolean,
    genre: Array
    production: Array,
    protagonist: Array[]
    producer: string,
    year: string,
    datePremiere: string,
    duration: number,
    langugage: string,
    img: string,
    director: string,
    description: string,
    //writer: string,
    schedule: Array
}

export interface IProtagonist {
    id: number,
    name: string
}

export interface IDirector {
    id: number,
    name: string
}

export interface IGenre {
    id: number,
    name: string
}

export interface IRoom {
    id: number,
    number: number,
    horario: IMovies[]
}
