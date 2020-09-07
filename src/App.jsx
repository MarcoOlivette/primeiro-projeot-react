import React from 'react'
import ComFilhos from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'

export default props =>
    <div>

        <Card titulo="Primeiro componente">
            <Primeiro />
        </Card>

        <Card titulo="exercicio X">
            <ComFilhos>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="exercicio X">
            <ComParametro titulo="titulo" subtitulo="subtitulo" />
        </Card>
    </div>