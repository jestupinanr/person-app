import { useEffect, useState } from "react"

//customHook para traer una peticion de una url
export const useFetch = (url) => {
    //crear el objeto para guardar la informacion
    const [state, setstate] = useState({data: null, loading: true});
    //traer la informacion de la respectiva api y solo volverla a llamar cuando se cambia la url
    useEffect(()=>{
        setstate({data: null, loading: true});
        fetch( url )
            .then(resp=> resp.json())
            .then(data => {
                setstate({
                    loading:false,
                    data
                });
        })
    },[url]);
    
 return state;
}
