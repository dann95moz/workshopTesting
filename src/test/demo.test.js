import { isLoggedIn } from "../base/01_var";
import { user } from "../base/02_string";
import { getSaludo } from "../base/03_function";
import { getUser } from "../base/04_object";
import { getIdAsync } from "../base/05_promesa";
import { getImagen } from "../base/07_asyncawait";
import { personaje } from "../base/heroes";
import { heroes } from "../data/heroes";

describe("pruebas a demo test", () => {
    test("validar login", () => {
        //preparar la mesa de trabajo, importaciones y variables

        const isAuthenticated = isLoggedIn

        //pruebas 
        if (isAuthenticated) { console.log("autenticado"); }
        else { throw new Error("usuario no identificado") }
    })
    test("validar nombre de usuario", () => {
        const userValidate = "pepito"
        expect(userValidate).toBe(user)
    })
    test("comparar strings", () => {
        const nombre = "susana"
        const saludo = getSaludo(nombre)

        //pruebas 
        expect(saludo).not.toBe(`hola ${nombre} no eres bienvenido`)
    })
    test("comparar objetos", () => {
        expect(getUser()).toEqual({
            name: "user",
            password: "123456"
        })//para objetos
    })
    test('validar filtrado', () => {
        const id = 3
        const heroe = personaje(id)
        const filtrado = heroes.find(heroe => heroe.id === 5)


        expect(heroe).not.toEqual(heroes[3])
    })

    test('validar heroe filtrado de una promesa', () => {
        //preparar mesa de trabajo 
        const id = 2
        getIdAsync(id)
            .then(resp => {
                expect(resp).toBe(heroes[1])

            })
    })
    test('validar url', async () => {
        //preparar mesa de trabajo
        const url = await getImagen()
        expect(typeof url).toBe("string")
    })
})
