import './App.css'
import React from 'react'
import ComFilhos from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import Repeticao from './components/Repetição'

export default props =>
    <div className="App">
        <Card titulo="Primeiro componente"> 
            <Primeiro />
        </Card>
        <Card titulo="Com filhos">
            <ComFilhos>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Com parametro">
            <ComParametro titulo="titulo" subtitulo="subtitulo" />
        </Card>
        <Card titulo="Repetição ">
            <Repeticao/>
        </Card>
    </div>