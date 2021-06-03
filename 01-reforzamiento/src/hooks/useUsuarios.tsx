import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    /**
     * useRef
     * como una referencia a una variable
     * si cambia el valor sigue siendo la misma
     * pero no haría falta volver a renderizar
     * el componente
     */
    const paginaRef = useRef(1);
    
    useEffect(() => {
        // hace la petición de cargarUsuarios
        cargarUsuarios();
    }, []);

    /**
     * Llamado al API usando axios
     */
    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        }
        else {
            paginaRef.current --;
            alert("No hay más registros");
        }
        
    }

    /**
     * Carga la data de la página siguiente
     */
    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    /**
     * Carga la data de la página siguiente
     */
    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }
}
