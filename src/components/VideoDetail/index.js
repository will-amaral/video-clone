import React, { useContext } from 'react';
import { Typography, Layout } from 'antd';

import styles from 'styles';
import Context from 'store';

export default ({ initial }) => {
  const { theme, selected } = useContext(Context);
  const { Title, Text } = Typography;
  const { Content } = Layout;

  const video = selected ? selected : initial;

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Content style={styles.iframeContainer}>
        <iframe
          title={video}
          style={styles.iframe}
          src={url}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </Content>
      <Content>
        <Title style={styles.detailTitle(theme)}>{video.snippet.title}</Title>
        <Text style={styles.detailSubtitle(theme)}>{video.snippet.description}</Text>
      </Content>
    </>
  );
};
