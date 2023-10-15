import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function dateFormatterFns(date: Date, formatString: string) {
  return format(date, formatString, { locale: ptBR })
}
