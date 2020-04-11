import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

import Context from 'store';
import Search from 'components/Search';
import AppContainer from 'components/AppContainer';
import ThemeSwitch from 'components/ThemeSwitch';
import styles from 'styles';

export default () => {
  const [theme, setTheme] = useState(false);
  const [search, setSearch] = useState('recentes');
  const [youtube, setYoutube] = useState();
  const [videos, setVideos] = useState();
  const [selected, setSelected] = useState();

  const { Header } = Layout;

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE;
    const { gapi } = window;
    gapi.load('client', () => {
      gapi.client.setApiKey(API_KEY);
      gapi.client.load('youtube', 'v3', () => {
        setYoutube(gapi.client.youtube.search);
      });
    });
  }, []);

  useEffect(() => {
    if (!youtube) return;
    const _onSearch = async (value) => {
      const {
        result: { items },
      } = await youtube.list({ q: value, part: 'snippet', type: 'video' });
      setVideos(items);
    };
    _onSearch(search);
  }, [youtube, search]);

  return (
    <Context.Provider value={{ theme, selected, setSelected }}>
      <Layout style={styles.container(theme)}>
        <Header style={styles.header(theme)}>
          <Search setSearch={setSearch} setSelected={setSelected} theme={theme} />
          <ThemeSwitch setTheme={setTheme} />
        </Header>
        <AppContainer videos={videos} />
      </Layout>
    </Context.Provider>
  );
};
