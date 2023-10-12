import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";

import * as S from './styles'
import { CalendarBlank, TagSimple } from "phosphor-react";

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
              <td>
                <span>
                  <TagSimple />
                  Venda
                </span>
              </td>
              <td>
                <span>
                  <CalendarBlank />
                  14/10/2023
                </span>
              </td>
            </tr>

            <tr>
              <td width='50%'>Hambúrguer</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 50,00
                </S.PriceHighlight>
              </td>
              <td>
                <span>
                  <TagSimple />
                  Alimentação
                </span>
              </td>
              <td>
                <span>
                  <CalendarBlank />
                  16/10/2023
                </span>
              </td>
            </tr>
          </tbody>
        </S.TransactionTable>
      </S.TransactionContainer>
    </div>
  )
}