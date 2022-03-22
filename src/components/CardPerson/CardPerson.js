import { Popup } from '../PopUp/Popup';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import './CardPerson.css';

//componente el cual se encarga de renderizar una carta de una persona junto con su informacion
//person: objeto de la persona dentro de ella estara la informacion a mostrar
export const CardPerson = ({ person }) => {
  //saber que tema se esta utilizando con ello cambiar el diseno de la vista
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  //este useState se encarga de mostrar o ocultar un popup con la informacion completa de la persona
  const [seeAllData, setSeeAllData] = useState(false);
  //renderizar el componente
  return (
    <div>
        <div className="card-item animate__animated animate__fadeIn">
            <div className={darkMode ? 'card-header-dark': 'card-header-light'} >
                <strong>{ person.name }</strong>
            </div>
            <div className='card-body'>
              <div className='card-left'>
                <Gravatar 
                  className='card-img animate__animated animate__bounce'
                  email={ person.email }
                />
                <div>
                  <h4>
                    <i className="fa-solid fa-building"></i>
                    <strong> Compañia </strong>
                  </h4>
                  <p>
                    { person.company.name }
                  </p>

                </div>
              </div>
              <div className='card-right'>
                <div>
                  <h4>
                    <i className="fa-solid fa-envelope"></i>
                    <strong> Email </strong>
                  </h4>
                  <p>{ person.email }</p>
                  <h4>
                    <i className="fa-solid fa-city"></i>
                    <strong> Ciudad </strong>
                  </h4>
                  <p>{ person.address.city }</p>
                </div>
              
                <button 
                  className={darkMode ? 'btn-primary btn-dark animate__animated animate__pulse': 'btn-primary animate__animated animate__pulse'}
                  onClick={()=>{setSeeAllData(!seeAllData)}}
                >
                  <i className="fa-solid fa-eye"></i> Ver mas   
                </button>
               
              </div>
            </div>
        </div>
        {
          //mostrar o no el componente popup con toda la informacion de una persona en especifica
          (seeAllData && <Popup person={ person } setSeeAllData={ setSeeAllData } seeAllData={ seeAllData }/>)
        }
    </div>
  )
};

//definir valores requeridos
CardPerson.propTypes = {
  person: PropTypes.object.isRequired
};
