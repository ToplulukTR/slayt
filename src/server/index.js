import App from '../common/containers/App';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../common/store/configureStore';
import express from 'express';
import { fetchCounter } from '../common/api/counter';
import qs from 'qs';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import search from '../common/lib/youtube-api-search'
import * as firebase from "firebase";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

const config = {
};
firebase.initializeApp(config);
const database = firebase.database();

server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));

server.get('/api/playlists', (req, res) => {
  const userId = req.query.user_id;
  /*
  firebase.database().ref(`user_${user_id}`).set({
    playlist: ['Ahmetin dugun', 'School party'],
  });
  */

  firebase.database().ref(`user_${userId}`).once('value').then(function(snapshot) {
    return res.send({playlists: snapshot.val().playlist});
  });
});


server.get('/api/videos', (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.send({error: true});
  }

  const API_KEY = 'AIzaSyDOSKJMms3-EdO9mFv2t4-nkKcXYggXK3s'
  search(API_KEY, keyword)
    .then(data => {
        const videos = data.items.map((item) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.default.url
          }
        });
        return res.send({videos});
      })
    .catch(error => {
       return res.send({error: true});
    });
});

server.get('/*', (req, res) => {
  firebase.database().ref('user_selman').once('value').then(function(snapshot) {
    // Compile an initial state
    const preloadedState = {
      user: {
        playlists: snapshot.val().playlist
      }
    };
    console.log(preloadedState)

    // Create a new Redux store instance
    const store = configureStore(preloadedState);

    // Render the component to a string
    const markup = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    res.send(`<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Razzle Redux Example</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''}
        ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`}
  </head>
  <body>
      <div id="root">${markup}</div>
      <script>
        window.__PRELOADED_STATE__ = ${serialize(finalState)}
      </script>
  </body>
</html>`);
  });
});

export default server;
