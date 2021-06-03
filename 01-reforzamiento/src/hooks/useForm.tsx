import { useState } from 'react';


export const useForm = <T extends Object >(formulario: T) => {
    
    const [state, setState] = useState( formulario );

    /**
     * Actualiza los valores del formulario cuando 
     * cambian los datos
     * @param value 
     * @param campo 
     */
    const onChange = ( value: string, campo: keyof T ) => {
        setState({
            ...state, // sin sobreescribir toda la data
            [campo]: value // computa la variable campo
        });
    }

    return {
        ...state,
        formulario: state,
        onChange,
    }
}
