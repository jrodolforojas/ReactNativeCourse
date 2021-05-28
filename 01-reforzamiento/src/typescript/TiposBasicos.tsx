
export const TiposBasicos = () => {

    const nombre: string = 'Rodolfo';
    const edad: number = 20;
    const estaActivo: boolean = true;

    // const poderes = ['Velocidad', 'Volar', 'Respirar en el agua'];
    const poderes: string[] = [];

    // You can do something like that
    // const poderes: (string| number) [] = [];

    // const poderes = []; // Error because poder is type any
    // poderes.push(1);
    // poderes.push('123');
    // poderes.push(true);

    // Var with many specific types. Nombre can be string or number
    //let nombre: string | number = 'Fernando';

    // Can't change to another type
    // nombre = 123; 

    // Booleans has not representation in html code.

    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br/>
            {poderes.join(', ')}
        </>
    )
}
