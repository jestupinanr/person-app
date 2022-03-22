
import { CardPerson } from "../CardPerson/CardPerson";
import PropTypes from 'prop-types';
import './ListCardScreen.css';

//componente el cual renderiza una lista con las cartas dentro de ellas la informacion de la persona
//persons: array de personas a renderizar en la lista
export const ListCardScreen = ({ persons }) => {
    //renderizar el componente
    return (
        <div className="cards-container">
            {
                //por cada persona se renderizara una carta por lo que se crea un nuevo componente que se encargue de ello
                persons.map(person=>(
                    <CardPerson 
                        key={person.id}
                        person = {person}
                    />
                ))
             }
        </div>
  )
};

//definir valores requeridos
ListCardScreen.propTypes = {
    persons: PropTypes.array.isRequired
};
