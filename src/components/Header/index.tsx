import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'

import * as S from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
