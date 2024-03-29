import React, { Componente } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({ credit, debts }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
        </fieldset>
        <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
            <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debts}`} text='Total de Débitos' />
            <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debts}`} text='Valor Consolidado' />
        </Row>
    </Grid>
)