import React from 'react';
import { Layout, Row, Col, Spin } from 'antd';

import styles from 'styles';
import VideoDetail from 'components/VideoDetail';
import VideoList from 'components/VideoList';

export default ({ videos }) => {
  const { Content } = Layout;

  if (!videos) return <Spin style={styles.spinner} />;

  return (
    <Content style={styles.content}>
      <Row>
        <Col lg={16} offset={1}>
          <VideoDetail initial={videos[0]} />
        </Col>
        <Col lg={6} offset={1}>
          <VideoList videos={videos.slice(1)} />
        </Col>
      </Row>
    </Content>
  );
};
