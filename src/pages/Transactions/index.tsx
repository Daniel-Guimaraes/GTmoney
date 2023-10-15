import { useContext } from 'react'

import { CalendarBlank, TagSimple } from 'phosphor-react'

import { TransactionsContext } from '../../contexts/TransactionsContext'

import { SearchForm } from './Components/SearchForm'
import { Summary } from '../../components/Summary'
import { Header } from '../../components/Header'

import * as S from './styles'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionContainer>
        <SearchForm />

        <S.TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </S.PriceHighlight>
                  </td>
                  <td>
                    <span>
                      <TagSimple />
                      {transaction.category}
                    </span>
                  </td>
                  <td>
                    <span>
                      <CalendarBlank />
                      {dateFormatter.format(new Date(transaction.created_at))}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </div>
  )
}
