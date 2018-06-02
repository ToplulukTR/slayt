import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

import configureStore from '../../common/store/configureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const setRenderRoutes = server => {
  server.get('/*', (req, res) => {

  res.send(`
    <!doctype html>
      <html lang="">
      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <title>Slayt - Create beautiful slides in a min!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''}
            ${process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`}
          <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
          <script>
            // Initialize Firebase
            var config = {
              apiKey: "AIzaSyACW7JlAVc1xRRlSOOthknzgtLYZdq9FYg",
              authDomain: "slayt1-e73ac.firebaseapp.com",
              databaseURL: "https://slayt1-e73ac.firebaseio.com",
              projectId: "slayt1-e73ac",
              storageBucket: "slayt1-e73ac.appspot.com",
              messagingSenderId: "679986567668"
            };
            firebase.initializeApp(config);
          </script>
      </head>
      <body>
          <div id="root"></div>
          <script>
            window.__PRELOADED_STATE__ = ${serialize({})}
          </script>
      </body>
    </html>`
    );
  });
}

export default setRenderRoutes;
