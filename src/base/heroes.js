import { heroes } from "../data/heroes";

export const personaje = (id) => {
    return heroes.find(heroe => heroe.id === id)
}