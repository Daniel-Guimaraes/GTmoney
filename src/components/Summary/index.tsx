import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { useSummary } from '../../hooks/useSummary'

import { priceFormatter } from '../../utils/formatter'

import * as S from './styles'

export function Summary() {
  const summary = useSummary()

  return (
    <S.SummaryContainer>
        <S.SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color='#00b37e'/>
          </header>

          <strong>{priceFormatter.format(summary.income)}</strong>
          
          <S.LastTransactionDate>
            Última Entrada em 13 de Abril 
          </S.LastTransactionDate>
        </S.SummaryCard>
        <S.SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color='#f75a68'/>
          </header>
          
          <strong>{priceFormatter.format(summary.outcome)}</strong>
          
          <S.LastTransactionDate>
            Última Saída em 18 de Abril 
          </S.LastTransactionDate>
        </S.SummaryCard>
        <S.SummaryCard variant='green'>
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color='#fff'/>
          </header>
          
          <strong>{priceFormatter.format(summary.total)}</strong>
        </S.SummaryCard>
    </S.SummaryContainer>
  )
}