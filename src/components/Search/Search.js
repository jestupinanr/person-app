import { useForm } from "../../hooks/UseForm";
import { useFetch } from "../../hooks/useFetch";
import { ListCardScreen } from "../ListCardScreen/ListCardScreen";
import PropTypes from 'prop-types';

import './Search.css';

//componente de buscador, en este componente se podra buscar una tarjeta y tambien es el encargado de renderizar o cargar
//la lista de tarjetas con los datos
//url: es la url de la api en la cual se va a tomar los datos
export const Search = ({ url }) => {

    //obtener la data por medio de una api
    const { data: persons, loading } = useFetch(url);
    
    //utilizar el hook de useForm para guardar valores y actualizar el campo de buscador
    const [ formValue, handleInputChance ] = useForm({
        searchText: '',
      });
    //obtener el valor especifico para calcular
    const {searchText} = formValue;  

    //buscar dentro de un conjunto de datos un valor especifico
    const searhPersons = (item)=>{
        return item.filter(user=>user.name.toLowerCase().includes(searchText));
    } 
    //renderizar el componente
    return (
    <div>
        {
            //si la informacion aun no se ha cargado se muestra un cargando..
            (loading)
            && <div>Cargando</div>
        }
        {
            //cuando la informacion ya esta cargada se muestra el buscador y asi mismo las tarjetas con la informacion
            (!loading)
            && <>
                <div className="input-container">
                    <input
                        type='text'
                        placeholder="Busca por nombre"
                        className="input-search"
                        name="searchText"
                        onChange={(e)=>{
                            handleInputChance(e);
                        }}
                    />
                </div>
                {
                    //si no hay nada que concuerde con la busqueda se muestra un mensaje de no encontrado
                    //de lo contrario muestra las cartas que esten concuerdo a lo que el usuario quiere buscar
                    (searhPersons( persons ).length > 0)
                        ? <ListCardScreen  persons={searhPersons( persons )}/>
                        : <div className="content-field-message">
                            <div className="field-message-warning">
                            No se encontro resultados para<strong> { searchText } </strong> por favor ingresa otro valor
                            </div>
                          </div>
                }
            </>
        }
    </div>
  )
};
//definir valores requeridos
Search.propTypes = {
    url: PropTypes.string.isRequired
};

