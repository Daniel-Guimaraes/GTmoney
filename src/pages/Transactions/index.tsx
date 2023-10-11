import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";

import * as S from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionContainer>
        <S.TransactionTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>14/10/2023</td>
            </tr>

            <tr>
              <td width='50%'>Hambúrguer</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 50,00
                </S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>16/10/2023</td>
            </tr>
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </div>
  )
}