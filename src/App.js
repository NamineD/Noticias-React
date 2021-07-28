import { Fragment, useEffect, useState } from "react";
import  Header  from './components/Header'
import  Form  from './components/Form'
import ListadoNoticias from "./components/ListadoNoticias";

//const API_KEY = '2b3e00913a624cd4921980d136bf4704'

function App() {
  const [noticias, guardarNoticias] = useState([])
  const [categoria, guardarCategoria] = useState('')

  useEffect(() => {
    const consultarAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=81f5caae99c44cb981a501d94ae5c1da`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      console.log(noticias.articles);

      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Form guardarCategoria={guardarCategoria}/>
        <ListadoNoticias noticias={noticias}/>
      </div>

    </Fragment>
  );
}

export default App;
