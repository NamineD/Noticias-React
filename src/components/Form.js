import React from 'react'
import useSelect from '../hooks/useSelect'
import styles from './Form.module.css'

export default function Form({guardarCategoria}) {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},
    ]
    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    //todo buscador de noticias
    const buscarNoticias = e =>{
        e.preventDefault()
        // guardar categoria
        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={`${styles.heading}`}>Encuentra Noticias por Categoria</h2>
                    
                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                        type="submit" 
                        value="Buscar"
                        className={`${styles['btn-block']} btn-large amber darken-2`}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
