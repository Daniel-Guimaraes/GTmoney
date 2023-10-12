import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

export function SearchForm() {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder='Busque por transações' />

      <button type='submit' aria-label='Botão de busca'>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </button>
    </S.SearchFormContainer>
  )
}