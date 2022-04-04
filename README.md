# Exemplo de Formulário SEM estados.

Este projeto consiste em um formulário simples que não necessita de estados para enviar os dados de seus inputs.
Geralmente quando criamos um formulário em React utilizamos alguns estados para inicializar e guardar seus valores no evento conforme exemplo abaixo:

```
const [state, setState] = useState(null);

<input
	type="text"
	onChange={(event) => setState(event.target.value)}
	value={state}
/>
```

### Certo! O que ganhamos com o Hook useRef?

Vale lembrar que por padrão do React, toda vez que alteramos um estado ou uma propriedade de um componente, ele irá renderizar novamente, ou seja, para cada letra que eu escrever no <i>input</i> ele irá renderizar o componente novamente.
Com  a utilização do useRef ele deixa de renderizar já que nosso formulário não tem nenhum estado para esses valores. Ele pegará o valor atual do elemento direto da árvore de Elementos do HTML.

### Quando utilizar o useRef?

Se tratando de alguns componentes pequenos, que não vão precisar compartilhar esses dados com nenhum outro componente, este seria o caso ideal para sua utilização.
Dependendo do tamanho do projeto ou da aplicação é necessário o compartilhamento de dados entre componentes, sendo assim necessário armazena-lo em algum estado e compartilhando o mesmo, dessa forma não sendo possível trabalhar com useRef já que não guardamos seu valor.
