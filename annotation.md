# Lint de formatação
Como lint do projeto eu vou usar o `eslint`, e para usar essa lib eu uso o seguinte comando:

```bash
npm i eslint @rocketseat/eslint-config -D
```

Após a instalação via ser criado um arquivo chamado `.eslintrc.cjs`, e nesse arquivo eu vou criar adicionar o seguinte comando 

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@rocketseat/eslint-config/react' // <- Linha adicionada
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

E agora eu vou criar dois scripts, um para listar erros em arquivos e outro para corrigir os erros globalmente:

```json
{
  "scripts": {
    "dev": "vite",
    "dev:server": "json-server server.json -w -d 500",
    "build": "tsc && vite build",
    "lint": "eslint src --ext .ts,.tsx", //<- lista os erros
    "lint:fix": "eslint src --ext .ts,.tsx --fix", //<- Corrigi os erros
    "preview": "vite preview"
  }
}
```


# Lib de estilização do projeto
Nesse projeto vou estar usando o `styled-components` para fazer a estilização do meu projeto. Então para instalar essa lib se usa o seguinte comando:

```bash
npm i styled-components
```
Preciso instalar também a tipagem, porque por padrão ela não inclusa com a lib, para isso eu uso o seguinte comando:

```bash
npm i @types/styled-components  
```

E lembrando que eu preciso criar uma arquivo chamado `styled.d.ts`, na onde esse arquivo vai conter a configuração da tipagem do styled-components, na onde eu vou extender as config, para que eu possa usar as cores que eu defini no meu `defaultTheme`:

```js
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

# Lib de ícones
Para os ícones do projeto eu vou estar utilizando a lib `phosphor-react` e para instalar essa lib eu vou usar o seguinte comando:

```bash
npm i phosphor-react
```

# Modal
Sempre que vou criar algum elemento que dado a uma ação do usuário, aparece em tela, eu tenho que tomar muito cuidado com a acessibilidade. Porque vamos supor que eu crie um pop-up, na onde quando eu clico em um botão aparece uma <div> em tela, isso para a acessibilidade não quer dizer nada, e muito menos para os leitores de tela. 

Então para lidar com isso, existe diversas libs que trazem toda a questão de acessibilidade para nossa aplicação, e para isso eu vou estar usando a lib `radix-ui`. E para usar o elemento de modal do radix eu uso o seguinte comando:

```bash
npm i @radix-ui/react-dialog
```

# Rádio Button 
No meu Modal eu tenho dois botões de entrada ou saída, e vão ser botões que o usuário vai poder selecionar somente 1 deles, muito semelhante com o botão do tipo `radio` do html. E para ter essa mesma funcionalidade eu vou usar a lib `radix-ui` para facilitar nossa vida, para instalar o pacote que vou usar, utiliza o seguinte comando:

```bash
npm i @radix-ui/react-radio-group
```

# JSON Server
Precisamos agora de uma API, e como não temos nenhum back-end desse projeto, eu vou o usar o `JSON Server`. Ele basicamente cria uma API completa a partir de um arquivo JSON. Para usar essa ferramenta, eu uso o seguinte comando: 

```bash
npm i json-server -D
```

Já com ele instalado eu vou criar um arquivo na raiz do meu projeto chamado `server.json`. Nesse arquivo eu vou criar um objeto, na onde para cada propriedade que eu passar, vai ser uma rota da nossa aplicação. A primeira que vou criar vai ser uma tabela de transações e como serão muitas, e vou adicionar ela como um array:

```json
{
  "transactions": [],
}
```

> Lembrando que essa api não vai para produção, então o objetivo dela, é criar uma aplicação react que já possui uma forma estruturada para lidar com um api no futuro. 

E agora eu preciso rodar o seguinte comando no meu terminal passando o nome do arquivo que eu criei:

```bash
npx json-server server.json
```

Ele vai abrir uma porta, e se eu acessar essa porta `localhost:3000/transactions`, e quando eu acessar essa porta eu vou ver que no navegador ele vai me retornar um vetor vazio, ou, qualquer coisa que eu colocar nesse vetor. 

Vou criar agora um objeto, que vai simular uma transação. Esse objeto vai conter as seguintes propriedades:

```json
{
  "transactions": [
    {
      "id": 1,
      "description": "Desenvolvimento de site",
      "type": "income",
      "category": "Venda",
      "price": 14000,
      "created_at": "2023-10-13T22:40:37.779Z"
    }
  ]
}
```

> Uma boa sacada para você conseguir passar uma data para um arquivo JSON, é você dar um "inspecionar" no navegador, ir no campo "console", e adicionar o seguinte comando: `new Date().toISOString()`. Esse comando vai me retornar a data atual com o 'timezone' já incluso.

Agora, por padrão o meu json-server ele não monitora esse arquivo que eu criei, para ele começar a monitorar eu preciso rodar seguinte comando:

```bash
npx json-server server.json -w
```

Agora no momento que eu atualizo meu arquivo, o navegador também atualiza a rota automaticamente. Uma outra coisa que eu posso adicionar ao meu server, é um delay, isso mesmo, porque quando estamos lidando com uma API em produção, ela possivelmente terá delays de alguns segundos, e já ter isso na nossa API nos permite criar **loadings**, e também sabermos quando precisaremos desabilitar algum botão, enquanto estiver em loading, para que o usuário não faça milhares de requisições de uma vez.

e para adicionar esse delay e, eu utilizo o seguinte comando:

```bash
npx json-server server.json -w -d 500
```

Com isso, ele adiciona um delay de 500 milissegundos. E agora para deixar esse comando salvo na memória, eu adiciono um `script` para ele no meu arquivo `package.json`.

```json
{
  "dev:server": "json-server server.json -w -d 500",
}
```

E agora é só eu rodar `npm run dev:server`. 


## Requisições HTTP
Vamos agora fazer requisições na nossa lista de transações para que ela seja listada na nossa tabela de transações. Lembrando que o que eu vou aplicar vai ser a mesma forma que aplicaremos para uma API em produção. 

```js
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

  
  //Uma boa prática é chamar a função com o hook `useEffect`
  //Para que essa requisição seja chamada somente na primeira renderização
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
```

# Validação do formulário

Para criar a validação do formulário eu vou utilizar a lib `react-hook-form` e o `zod`. Para instalar essas libs eu uso o seguinte comando:

```bash
npm i react-hook-form zod
```

Vou precisar instalar também o `resolvers` do hook-form, para instalar eu uso o seguinte comando:

```bash
npm i @hookform/resolvers
```

Feito isso eu só preciso criar a estrutura de validação como mostrado abaixo:

```js
import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income','outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema> 

export function NewTransactionModal() {
  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting }, 
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
      <input 
        type="text" 
        placeholder='Descrição' 
        required 
        {...register('description')}
      />
      
      <input 
        type="number" 
        placeholder='Preço' 
        required 
        {...register('price', { valueAsNumber: true})}
      />

      <input 
        type="text" 
        placeholder='Categoria' 
        required 
        {...register('category')}
      />
      
      <button type="submit" disabled={isSubmitting}>Cadastrar</button>
    </form>
  )
}
```

# lib de Requisições HTTP
Para fazer as requisições do meu site, eu vou utilizar uma lib chamada `axios`. E por mais que a `fetch API` seja bastante útil, ela não é tão amigável para quem está programando.

Para instalar essa lib eu uso:

```bash
npm i axios
```

Vou começar criando uma pasta chamada `lib` e dentro dela um arquivo chamado `axios.ts`. Nesse arquivo eu vou criar uma URL base para meu projeto, para que eu não tenha que ficar repetindo toda hora a mesma URL.

```js
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000'
})
```

E agora eu modifico a forma que eu estava fazendo as requisições, deixando as coisas bem mais simples:

```js


```






