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

    this.state = {
      videos: [],
      detail: null,
      text: ''
    };
    this.timeout = null;
    this.onSearch = this.onSearch.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLoad(' ');
  }

  async onLoad(busca) {
    await this.onSearch(busca);
    this.setState({ detail: this.state.videos[0]});
  }

  async onSearch(busca) {
    let videos = await YTSearch(busca, opts);
    this.setState({
        videos: videos.results
      });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => { this.onLoad(this.state.text) }, 420);
  }

  onSelect(detail) {
    this.setState({ detail });
    this.onSearch(detail.title);
  }

  render() {
    return (
      <Section>
        <Container>
          <SearchBar value={this.state.text} handleChange={this.handleChange}/>
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