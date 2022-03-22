import { useContext } from "react"
import { Search } from "./components/Search/Search"
import { Navbar } from "./components/ui/Navbar"
import { ThemeContext } from "./context"

//componente padre el cual tiene dentro todos los componentes necesarios para que la pafina funcione
export const ShowPersonApp = () => {
  //traer la informacion del tema que el usuario esta utilizando (oscuro o claro)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    //saber que tema debe ser visto por el usuario y renderizar los componentes principales
    <div className={darkMode ? "backGround-dark" : "background-light"}>
        <Navbar/>
        <Search url={"https://jsonplaceholder.typicode.com/users"} /> 
    </div>
  )
}
