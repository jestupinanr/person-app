import { createContext, useReducer } from "react";

//crear un contexto para cambiar de tema y poderlo usar en cualquier componente
export const ThemeContext = createContext();
//inicia;izar el estado del componente
const INITIAL_STATE = { darkMode: false };
//crear la funcion para cambiar el tema
const themeReducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE":
			return { darkMode: !state.darkMode };
		default:
			return state;
	}
};
//crear el proveedor del tema
export const ThemeProvider = (props) => {
	const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	);
};