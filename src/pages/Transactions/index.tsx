import { useEffect, useState } from "react";

import { CalendarBlank, TagSimple } from "phosphor-react";

import { SearchForm } from "./Components/SearchForm";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";

import * as S from './styles'

export interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])


  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionContainer>
        <SearchForm />

        <S.TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.created_at}</td>
                </tr>
              )
             })}
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </div>
  )
}