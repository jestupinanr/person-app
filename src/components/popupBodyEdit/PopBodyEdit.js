import { useContext } from "react";
import { ThemeContext } from "../../context";
import { useForm } from "../../hooks/UseForm";
import { PopupElement } from "../PopupElement/PopupElement";
import PropTypes from 'prop-types';

//componente el cual renderiza el cuerpo del popup pero modificable
//person: informacion de la persona 
//setEdit: funcion la cual cambia los datos de vista a editar
//setSeAllData: funcion la cual nos cambia de vista popup a vista de lista
export const PopBodyEdit = ({ person, setEdit, setSeeAllData}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode; 

  //utilizar el hook de useForm para actualizar y guardar los valores
  const [ personModifier, handleInputChange] = useForm({
        personEmail : person.email,
        personAdress : person.address.city,
        personStreet : person.address.street,
        personSuite : person.address.suite,
        personPhone: person.phone,
        personWebside: person.website,
        personCompany: person.company.name
    });

  //sacar las variables del objeto
  const {
      personEmail,
      personAdress,
      personStreet,
      personCompany,
    //   personSuite,
      personPhone,
      personWebside
    } = personModifier;

  //funcion la cual actualiza los elementos del array
  const handleSubmit = (e)=>{
    e.preventDefault();

    //actualizar los valores de person
    person.email= personEmail;
    person.address.street= personStreet;
    person.phone= personPhone;
    person.website = personWebside;
    person.address.city = personAdress;
    person.company.name = personCompany
    //cambiar de modo editar a modo ver
    setEdit(false);
  }  
  //renderizar el componente
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="popup-bottom">
                <PopupElement 
                    title={"compañia"}
                    info={ person.company.name }
                    edit = { true }
                    name = { 'personCompany' }
                    handleInputChange ={ handleInputChange }
                />
            </div>
            <hr/>
            <div className='popup-body'>
                <div className='popup-elements'>
                    <div className='popup-element'>
                        <PopupElement 
                            title={"Email"}
                            info={ person.email }
                            edit = { true }
                            name = { 'personEmail' }
                            handleInputChange ={ handleInputChange }
                        />
                    </div> 
                    <div className='popup-element'>
                        <PopupElement 
                            title={"Ciudad"}
                            info={ person.address.city }
                            edit = { true }
                            name = { 'personAdress' }
                            handleInputChange ={ handleInputChange }
                        />
                    </div>
                    <div className='popup-element'>
                        <PopupElement 
                            title={"Direccion"}
                            info={ `${person.address.street} - ${person.address.suite}` }
                            edit = { false }
                            handleInputChange ={ handleInputChange }
                        />
                    </div>
                </div>
                <div className='popup-elements'>
                    <div className='popup-element'>
                        <PopupElement 
                            title={"Telefono"}
                            info={ person.phone }
                            edit = { true }
                            name = { 'personPhone' }
                            handleInputChange ={ handleInputChange }
                        />
                    </div>
                    <div className='popup-element'>
                        <PopupElement 
                            title={" Sitio web"}
                            info={ person.website }
                            edit = { true }
                            name = { 'personWebside' }
                            handleInputChange ={ handleInputChange }
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
                type="submit"
            >
                Guardar
            </button>
        </div>
        </form>
    </>
  )
};
PopBodyEdit.propTypes = {
    setEdit: PropTypes.func.isRequired,
    setSeeAllData: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired
};
