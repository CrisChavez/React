import "./Mensaje.css"
import { useState } from "react"

const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false);

    const manejadorMensaje = () => {
        setMensaje (!mensaje); 
        // Recuerden que "!" invierte el valor de la variable booleana.
    }


  return (
    <div>
      <button onClick={manejadorMensaje}> {mensaje ? "Ocultar Mensaje" : "Mostrar Mensaje"} </button>
      {mensaje && <h2>Aguante el useState calaho manito!!!</h2>}
    </div>
  )
}

export default Mensaje
