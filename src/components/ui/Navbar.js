import { useContext } from 'react'
import { ThemeContext } from '../../context'
import './Navbar.css'

//componente  de navegacion de usuario en este componente el usuario podria moverse por todas las paginas que se tengan
//pero como es solo una vista aqui se ve el nombre de la aplicacion y tambien el boton para cambiar de tema
export const Navbar = () => {
  //traer el contexto para saber que tema se es utilizando 
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  //funcion la cual cambia de tema de oscuro a claro o viseversa
   const handleChangeTheme =()=>{
      theme.dispatch({ type: "TOGGLE" });
   }
   //renderizar el componente, aqui tenemos el nombre de la aplicacion y asi mismo el boton de cambiar tema
  return (
    <div className="navbar">
        <div className='navbar-left'>
            <i className="fa-solid fa-user fa-2x"> PersonApp</i>
        </div>
        <div className='navbar-right'>
          <i className="fa-solid fa-moon fa-2x" ></i>-
          {
            //boton de cambiar tema
            (!darkMode)
              ? <i className="fa-solid fa-toggle-off fa-2x on-click animate__animated animate__bounceIn" onClick={handleChangeTheme}></i>
              : <i className="fa-solid fa-toggle-on fa-2x on-click animate__animated animate__bounceIn" onClick={handleChangeTheme}></i>
          }
        </div>
    </div>
  )
}
