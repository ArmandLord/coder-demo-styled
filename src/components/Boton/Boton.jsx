import { useState } from "react";
import { Div, BotonUno } from "./Boton.style"


const Boton = () => {

    const [ color, setColor ] = useState(true)

  return (
    <Div>
      <div className="div-uno">div normal</div>
      <BotonUno bg={color} co={color} onClick={() => setColor(!color)}>
        Btn styled components
      </BotonUno>
    </Div>
  );
};

export default Boton;
