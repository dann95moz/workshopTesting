export const getIdAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const personaje = personaje(id)
            if (personaje) {
                resolve(personaje)
            } else {
                reject(`no existe un personaje con el id ${id}`)
            }
        }, 1000)
    })
}