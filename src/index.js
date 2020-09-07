import './index.css'
import React from 'react';
import ReactDOM from 'react-dom'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
    <div>

        <ComFilhos>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </ComFilhos>
        {/* <Primeiro/>
        <ComParametro titulo="titulo" subtitulo="subtitulo"/>
        <ComParametro titulo="titulo" subtitulo="subtitulo"/>
        <ComParametro titulo="titulo" subtitulo="subtitulo"/>
        <ComParametro titulo="titulo" subtitulo="subtitulo"/>
        <ComParametro titulo="titulo" subtitulo="subtitulo"/> */}

    </div>,
    document.getElementById('root')
)