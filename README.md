# Clone do Youtube

Este projeto foi criado como um tutorial para palestras e cursos básicos de React. O objetivo é ensinar de forma simplificada o funcionamento da biblioteca, com componentes *stateful* e *stateless*, conceitos básicos de *state* e *props*, bem como organização geral da estrutura de projeto. O boilerplate inicial do projeto foi feito com [Create React App](https://github.com/facebook/create-react-app), e a estilização foi feito com [Bulma](https://bulma.io) e [Bloomer](https://bloomer.js.org). 

## Live App

A aplicação completa pode ser visualizada [aqui](https://will-amaral.github.io/video-clone).

## Rodando localmente

#### Requisitos

- [Node.js](https://nodejs.org/) (LTS mais recente)
- [Yarn](https://yarnpkg.com/)

#### Para executar

Antes de iniciar o seu projeto, não se esqueça de adicionar a chave da sua API do Youtube às variáveis de ambiente como `REACT_APP_API_KEY`. Para mais informações sobre chaves de API do Youtube, visite [a página do Google Developer](https://developers.google.com/youtube/v3/).

- `git clone git@github.com:will-amaral/video-clone.git`
- `cd video-clone`
- `yarn` (instala todas as dependências)
- `yarn start` (Iniciar o servidor de desenvolvimento)

Além de start, o projeto inclui os scripts de `build` (compila um bundle), `test` e `deploy`. 
