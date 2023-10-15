import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  const { lastIncomeDate, lastOutcomeDate } = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        const creationDate = new Date(transaction.created_at).toISOString()

        if (
          transaction.type === 'income' &&
          (!acc.lastIncomeDate || creationDate > acc.lastIncomeDate)
        ) {
          acc.lastIncomeDate = creationDate
        } else if (
          transaction.type === 'outcome' &&
          (!acc.lastOutcomeDate || creationDate > acc.lastOutcomeDate)
        ) {
          acc.lastOutcomeDate = creationDate
        }
        return acc
      },
      { lastIncomeDate: '', lastOutcomeDate: '' },
    )
  }, [transactions])

  return {
    summary,
    lastIncomeDate,
    lastOutcomeDate,
  }
}
