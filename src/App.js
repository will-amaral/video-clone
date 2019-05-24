import React, { Component } from 'react';
import {
  Section,
  Container,
  Columns
} from 'bloomer';
import YTSearch from 'youtube-search';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

const API_KEY = process.env.REACT_APP_API_KEY;
const opts = { maxResults: 6, key: API_KEY, type: 'video' };  

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearch.bind(this);
    this.onSearch('');
  }

  state = {
    videos: [],
    detail: null
  };

  onSearch = async (busca) => {
    let videos = await YTSearch(busca, opts);
    this.setState({
        videos: videos.results,
        detail: videos.results[0]
      });
  }

  onSelect = (detail) => {
    this.setState({ detail });
    this.onSearch(detail.title);
  }

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