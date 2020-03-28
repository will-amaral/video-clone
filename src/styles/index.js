export default {
  header: theme => {
    return {
      background: theme ? '#222' : '#fff',
      padding: 10,
      textAlign: 'center'
    };
  },
  content: {
    margin: '40px 0 20px 0'
  },
  container: theme => {
    return {
      background: theme ? '#222' : '#fff',
      minHeight: '100vh'
    };
  },
  spinner: {
    margin: '20%'
  },
  iframeContainer: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56.25%'
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  itemTitle: theme => {
    return {
      color: theme && '#fff',
      lineHeight: '1.2em',
      margin: 0
    };
  },
  itemSubtitle: theme => {
    return {
      color: theme && '#aaa',
      margin: 0
    };
  },
  listItem: {
    cursor: 'pointer',
    margin: '20px 0'
  },
  detailTitle: theme => {
    return {
      color: theme && '#fff',
      fontSize: '2em',
      marginTop: 20
    };
  },
  detailSubtitle: theme => {
    return {
      color: theme && '#aaa'
    };
  },
  search: {
    width: '40%'
  }
};
