import { useContext } from "react";
import { ThemeContext } from "../../context";
import { PopupElement } from "../PopupElement/PopupElement";
import PropTypes from 'prop-types';

//componente el cual renderiza el cuerpo con la informacion de la persona en modo lectura
//person: objeto con los datos de la persona a mostrar
//setEdit: funcion la cual cambia los datos de vista a editar
//setSeAllData: funcion la cual nos cambia de vista popup a vista de lista

export const PopupBody = ({ person, setEdit, setSeeAllData}) => {
 //saber que tema esta utilizando para cambiar el dise;o
 const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode; 
  //renderizar el componente
  return (
      <>
        <div className="popup-bottom animate__animated animate__zoomIn">
            <PopupElement 
                title={"compañia"}
                info={person.company.name}
                edit = { false }
                
            />
       </div>
       <hr/>
       <div className='popup-body animate__animated animate__animated animate__backInDown'>
            <div className='popup-elements'>
                <div className='popup-element'>
                    <PopupElement 
                        title={"Email"}
                        info={ person.email }
                        edit = { false }
                    />
                </div> 
                <div className='popup-element'>
                    <PopupElement 
                        title={"Ciudad"}
                        info={ person.address.city }
                        edit = { false }
                    />
                </div>
                <div className='popup-element'>
                    <PopupElement 
                        title={"Direccion"}
                        info={ `${person.address.street} - ${person.address.suite}` }
                        edit = { false }
                    />
                </div>
            </div>
            <div className='popup-elements'>
                <div className='popup-element'>
                    <PopupElement 
                        title={"Telefono"}
                        info={ person.phone }
                        edit = { false }
                    />
                </div>
                <div className='popup-element'>
                    <PopupElement 
                        title={" Sitio web"}
                        info={ person.website }
                        edit = { false }
                    />
                </div>
            </div>
        </div> 
        <div className='content-center'>
            <button 
                className={darkMode ? 'btn-primary btn-dark': 'btn-primary'}
                onClick={()=> setSeeAllData(false)}    
            >
                Cerrar
            </button>
            
            <button 
                className={darkMode ? 'btn-primary btn-dark': 'btn-primary'}
                onClick={()=>  setEdit(true)}  
            >
                Editar
            </button>
        </div>
    </>
  )
};
PopupBody.propTypes = {
    setEdit: PropTypes.func.isRequired,
    setSeeAllData: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired
};
