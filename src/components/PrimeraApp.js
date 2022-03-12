import React from 'react'

const PrimeraApp = ({ saludo, subtitulo, otro }) => {
    return (
        <div>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
            <p>{otro}</p>
        </div>
    )
}

export default PrimeraApp