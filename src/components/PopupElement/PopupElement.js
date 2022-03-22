import './PopupElement.css';
//componente el cual renderiza un campo con la informacion
//title: titulo de la informacion
//info: informacion a mostrar
//edit: true(muestra la informacion para editar) false(muestra la informacion solo lectura)
//handleInputChange: actualizar el campo de la informacion de la persona
//name: nombre del input con ello se puede reutilizar el hook de useForm
export const PopupElement = ({title="", info="", edit = false, handleInputChange, name="" }) => {
  return (
    <>
      {
        //mostrar la informacion en modo lectura o en modo de editar
        (!edit)
          ?
            <>
              <h4 className='title-popups-edit'>
                <i className="fa-solid fa-building"></i>
                <strong> { title } </strong>
              </h4>
              <p>
                  { info }
              </p>
            </>
            :
            <>
              <h4 className='title-popups-edit'>
                <i className="fa-solid fa-building"></i>
                <strong> { title } </strong>
              </h4>
                <input
                  className="input-popup animate__animated animate__bounceIn"
                  type="text"
                  name = { name }
                  onChange = { handleInputChange }
                  defaultValue={ info }
                  />
            </>
      }
    </>
  )
}
