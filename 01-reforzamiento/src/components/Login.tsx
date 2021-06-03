import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type LoginActionPayload = {
    username: string;
    nombre: string;
}

// Payload es lo que yo le quiero mandar
type AuthAction = 
    | { type: 'logout'}
    | {type: 'login', payload: LoginActionPayload};

// Reducer es una funcion que tiene ese nombre
// solo que debe retornar un objeto tipo initialState
// La action es la que modifica el state
const authReducer = (state : AuthState, action : AuthAction) : AuthState => {
    switch (action.type) {
        case 'logout':

            return {
                validando: false,
                token: null,
                nombre: '',
                username: '',
            }

        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username
            }
    
        default:
            return state;
    }
}

export const Login = () => {

    // useReducer es como un useState pero para objetos más complejos
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
        
    }, []);

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                nombre: 'Rodolfo',
                username: 'fofo'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        });
    }

    if (validando) {
        return (
            <>
                <div className = "alert alert-info">
                    Validando ...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? <div className = "alert alert-success">Autenticado como {nombre}</div>
                    : <div className = "alert alert-danger">No autenticado</div>
            }

            {
                (token)
                ? (
                    <button 
                        className= "btn btn-danger"
                        onClick = {logout}> 
                            Logout 
                    </button>
                )
                : (
                    <button 
                        className= "btn btn-primary"
                        onClick = {login}> 
                            Login 
                    </button>
                )
            }

        </>
    )
}
