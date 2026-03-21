# Form Validation Practice

Atividade prática de validação de formulário com JavaScript, feita a partir da lição [Form Validation with JavaScript](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript#a-little-more-practice) do The Odin Project.

Este projeto nao e um projeto principal da trilha como Library, Tic Tac Toe ou Restaurant Page. Ele foi desenvolvido como exercicio complementar sugerido no fim da licao para praticar a **Constraint Validation API** e validacao customizada no front-end.

## Objetivo da Atividade

O objetivo principal foi praticar:
- Validacao de formulario usando JavaScript
- Uso do atributo `novalidate` para controlar toda a validacao no JS
- Feedback visual de campos validos e invalidos
- Mensagens de erro customizadas por campo
- Validacao em tempo real durante digitacao e ao enviar

## O que foi implementado

Formulario com os campos:
- Email
- Country
- Postal code
- Password
- Confirm Password

Regras de validacao aplicadas:
- **Email**: validacao com expressao regular
- **Postal code**: validacao por pais (Suica, Franca, Alemanha e Holanda)
- **Password**: minimo de 3 caracteres alfanumericos (conforme implementacao atual)
- **Confirm Password**: precisa ser igual ao campo de senha

Comportamento da interface:
- Campos recebem classe `.valid` ou `.invalid`
- Mensagens de erro aparecem dinamicamente abaixo dos inputs
- Envio do formulario e interceptado com `event.preventDefault()`
- Exibe alerta final de erro ou sucesso

## Como usar

1. Abra o arquivo `index.html` em seu navegador
2. Preencha os campos do formulario
3. Veja a validacao acontecer em tempo real
4. Clique em "Enviar" para testar a validacao final

## Estrutura

- `index.html`: estrutura do formulario
- `style.css`: estilos base e estados de validacao
- `script.js`: logica de validacao, mensagens de erro e envio

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

---

Referencia da licao: [The Odin Project - Form Validation with JavaScript](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
