import { shallow } from "enzyme"
import PrimeraApp from "../components/PrimeraApp"

describe("Prueba a PrimeraApp/", () => {
    test("validar render de primeraAapp/", () => {

        const saludo = "hola mundo"
        const subtitulo = "esto es una prueba"
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}
            otro={"hola"}//u for update the snapshop
        />)
        expect(wrapper).toMatchSnapshot()
    })
})