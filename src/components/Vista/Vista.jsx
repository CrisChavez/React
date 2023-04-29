import "./Vista.css"
import { useState } from "react"

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState (false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro)
    }

    const estilo = modoOscuro ? "oscuro" : "claro"

  return (
    <div className= {estilo}>
      <button onClick={ cambiarModo }> {modoOscuro ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"} </button>
      <h2> Componente Vista </h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi et, cumque reiciendis ipsa in doloremque ad tempore nihil voluptate atque nulla porro laboriosam mollitia, doloribus esse eaque saepe maiores ut eius quam deserunt sapiente omnis. Cumque, natus ipsum inventore hic illo animi sit qui eveniet, cum minima exercitationem dolore assumenda dolorum ex quaerat rerum. Dicta eaque sit cum quod consequatur possimus nesciunt fugiat temporibus amet, unde voluptates tempore suscipit in iusto, voluptatum voluptatibus sapiente quae blanditiis! Unde laboriosam in voluptates impedit quos velit blanditiis, saepe harum dignissimos eaque! Itaque impedit facilis voluptatibus atque cupiditate repudiandae excepturi nulla odio enim sequi? </p>
    </div>
  )
}

export default Vista
