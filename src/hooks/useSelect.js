import React, {useState} from 'react'

const useSelect = (stateInicial, opciones) => {
    const [state, setState] = useState(stateInicial)
        const SelecNoticias = () =>(
        <select 
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option 
                key={opcion.value}
                value={opcion.value}>{opcion.label}</option>
            ))}           

        </select>
        )
    return [state, SelecNoticias]
}

export default useSelect


