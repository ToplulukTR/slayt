import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

import {getRoot} from '../../common/components/root';
import configureStore from '../../common/store/configureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const setRenderRoutes = server => {
  server.get('/*', (req, res) => {
    // fetch user data
    const docRef = global.clients.database.collection("users").doc("selman");
    docRef.get().then(doc => {
      if (doc.exists) {
        const userData = doc.data();

        // Compile an initial state
        const preloadedState = {
          app: {
            liked: {
              list: userData.liked
            },
            playlists: {
              list: userData.playlists
            }
          }
        };
        // TODO copied from root.js
        const store = configureStore(null, preloadedState);
        const finalState = store.getState();
        const markup = renderToString(getRoot(true, req.path));

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
            </head>
            <body>
                <div id="root">${markup}</div>
                <script>
                  window.__PRELOADED_STATE__ = ${serialize(finalState)}
                </script>
            </body>
          </html>`
        );
      }

      return res.send('error');
    }).catch(function(error) {
      return res.send('error');
    });
  });
}

export default setRenderRoutes;
