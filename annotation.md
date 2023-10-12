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
