// Aqui importamos os pacotes que foram instalados explicitamente
// usando o Yarn add
import React, { Component } from 'react';
import {
  Section,
  Container,
  Columns
} from 'bloomer';
import YTSearch from 'youtube-search';
// Para fins de organização, os componentes criados pelo usuário 
// ficam agrupados juntos
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
// A declaração das nossas variáveis. 
// Aqui precisamos de uma chave de API do 
// Youtube Data API v3. Para saber como gerar, siga
// as instruções em: https://developers.google.com/youtube/v3/.
// No caso do pacote youtube-search, nós precisamos configurar
// as opções de busca, que é um ojbeto armazenado na constante
//opts. Existem opções adicionais na documentação do pacote. 
const API_KEY = process.env.REACT_APP_API_KEY;
const opts = { maxResults: 6, key: API_KEY, type: 'video' };  

// Aqui definimos o nosso componente principal. Nós refatoramos esse
// componente para ser um componente de Classe. Diferente dos componentes
// função, ele possui parâmetros e configurações separados.
class App extends Component {
  // A primeira diferença é a existência de um construtor. 
  // Nesse construtor, recebemos as configurações do objeto Component, e 
  // podemos definir a execução de funções da classe. 
  constructor(props) {
    super(props);
    this.onSearch('');
  }
  // Assim como classes em outras linguagens, a Class do JavaScript pode
  // possuir propriedades e métodos. A principal diferença é que a declaração
  // de propriedades não necessita de palavras reservadas para a criação de 
  // variáveis, como var, const ou let. Declaramos ela diretamente. 
  // Aqui declaramos a propriedade state, que vai mapear o estado da 
  // aplicação. Dentro dela, temos um Array vazio, e uma variável nula. 
  state = {
    videos: [],
    detail: null
  };
  
  // O primeiro método da nossa Classe App é uma função de busca, que utiliza a API
  // do Youtube para resgatar uma lista de vídeos com base em uma string. 
  // Uma boa prática para trabalhar com apis é utilizá-las de forma assíncrona,
  // por isso utilizamos a palavra reservada async antes da função. 
  // Aqui utilizamos uma arrow function devido a utilização da palavra this, que tem 
  // escopo diferente em funções regulares. 
  onSearch = async (busca, isSelected) => {
    // Recebemos os dados da API e armazenamos na variável videos
    let data = await YTSearch(busca, opts);
    let videos = data.results;
    // Passamos os dados da variável para o estado da aplicação. 
    // Sempre que o estado muda, no React, a aplicação re-renderiza os componentes
    // que o utilizam. 
    this.setState({ videos });
    // Se o vídeo não tiver sido escolhido diretamente como opção,
    // no caso da primeira busca, ou de buscas na barra de pesquisa, 
    // colocamos o primeiro resultado como detalhe do vídeo. 
    if (!isSelected)
      this.setState({ detail: videos[0] });
  }
  // O segundo método serve para podermos selecionar o vídeo a ser
  // exibido. Para emular o comportamento de "vídeos relacionados",
  // Realizamos uma nova busca, passando o título do vídeo como 
  // pesquisa, e o parâmetro true para vídeo selecionado. 
  onSelect = detail => {
    this.setState({ detail });
    this.onSearch(detail.title, true);
  }
  // Renderizamos os componentes, selecionados, utilizando os componentes de 
  // estilo do bulma. 
  // Os componentes SearchBar, VideoDetail e VideoList recebem props específicos. 
  render() {
    return (
      <Section>
        <Container>
          <SearchBar onSearch={this.onSearch}/>
          <Columns>
            <VideoDetail video={this.state.detail}/>
            <VideoList videos={this.state.videos} onSelect={this.onSelect}/>
          </Columns>
        </Container>
      </Section>
    );
  }
}

export default App;