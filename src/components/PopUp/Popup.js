import Gravatar from 'react-gravatar';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context';
import { PopupBody } from '../PopupBody/PopupBody';
import { PopBodyEdit } from '../popupBodyEdit/PopBodyEdit';
import PropTypes from 'prop-types';
import './Popup.css'

//componente que se encarga de renderizar toda la informacion de una persona en especifica
//en este componente a parte de observar la informacion tambien se podra editar alguna de esta
//person: objeto de la persona con toda la informacion de ella
//setAllData: funcion para cambiar de vista de popup a lista o viceversa

export const Popup = ({ person, setSeeAllData}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode; 
  //con este useState podemos definir si vamos a editar campos o no
  const [edit, setEdit] = useState(false);
  //renderizar el componente
  return (
    <div className='popup-container animate__animated animate__fadeIn'>
        <div className={(darkMode ? 'popup-item-dark' : 'popup-item-light')}>
            <div className={darkMode ? 'popup-header-dark animate__animated animate__bounce': 'popup-header-light animate__animated animate__bounce'}>
                 { person.name }
            </div>
            <div className='popup-content-img animate__animated animate__backInDown'>
                <Gravatar 
                    className='popup-img'
                    email={person.email}
                    edit = { edit }
                />
            </div>
                {
                    //mostrar la informacion o habilitar la informacion para editar
                    (!edit)
                    ? <PopupBody 
                        person={person}
                        setEdit={setEdit}
                        setSeeAllData={setSeeAllData}
                    />
                    : <PopBodyEdit 
                        person={person}
                        setEdit={setEdit}
                        setSeeAllData={setSeeAllData}
                    />
                }
        </div> 
    </div>
  )
};

//definir valores requeridos
Popup.propTypes = {
    setSeeAllData: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired
};
