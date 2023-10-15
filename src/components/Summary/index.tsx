import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { useSummary } from '../../hooks/useSummary'

import { priceFormatter } from '../../utils/formatter'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import * as S from './styles'

export function Summary() {
  const { summary, lastIncomeDate, lastOutcomeDate } = useSummary()

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>

        <S.LastTransactionDate>
          Última entrada em{' '}
          {lastIncomeDate &&
            format(new Date(lastIncomeDate), "d 'de' MMMM", { locale: ptBR })}
        </S.LastTransactionDate>
      </S.SummaryCard>
      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>

        <S.LastTransactionDate>
          Última Saída em{' '}
          {lastOutcomeDate &&
            format(new Date(lastOutcomeDate), "d 'de' MMMM", { locale: ptBR })}
        </S.LastTransactionDate>
      </S.SummaryCard>
      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
