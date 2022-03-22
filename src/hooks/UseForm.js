import { useState } from 'react';

//custoHook para actualizar un formulario y guardar la infromacion
export const useForm = ( initialState = {} ) => {
    //inicializar el estado con los valores mandados por el componente    
    const [values, setValues] = useState(initialState);
    //actualizar el valor con la informacion normalmente se llama con un onChange
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }
    //retornar los valores
    return [ values, handleInputChange ];
}