import React, { useContext } from 'react';
import { List } from 'antd';

import styles from 'styles';
import Context from 'store';

export default ({ data }) => {
  const { theme, setSelected } = useContext(Context);
  const { Item } = List;
  const { Meta } = Item;

  const { title, channelTitle, thumbnails, publishedAt } = data.snippet;

  return (
    <Item style={styles.listItem} key={data.etag} onClick={() => setSelected(data)}>
      <Meta
        avatar={<img width={160} src={thumbnails.medium.url} alt='thumbnail' />}
        title={
          <p style={styles.itemTitle(theme)}>
            {title.length > 45 ? title.slice(0, 45) + '...' : title}
          </p>
        }
        description={
          <>
            <p style={styles.itemSubtitle(theme)}>{channelTitle}</p>
            <p style={styles.itemSubtitle(theme)}>
              {new Date(publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </>
        }
      />
    </Item>
  );
};
