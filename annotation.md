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