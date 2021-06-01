/**
 * Type: 
 * Class: Crear instancias
 * Interface: Es más fácil de expandir
 */

interface Persona {
    nombreCompleto: string;
    edad: number;
    // direccion : {
    //     pais: string;
    //     casa: number;
    // }
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Rodolfo',
        edad: 20,
        direccion: {
            pais: 'Costa Rica',
            casaNo: 10,
        }
    }

    // persona.nombreCompleto = 'xdxd';  // Error

    return (
        <>
            <h3>Objetos Literales</h3>
            {/* {JSON.stringify( persona )} */}
            <code>
                <pre> { JSON.stringify(persona, null, 2) } </pre> 
            </code>
        </>
    )
}
