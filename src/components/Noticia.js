import React from 'react'


export default function Noticia({noticia}) {

    const {title, description, url, urlToImage} = noticia

    return (
        <div className="col s10 m6 14">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage}/>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-accion">
                    <a href={url} className="btn">Ver noticia completa</a>
                </div>
            </div>
        </div>
    )
}
