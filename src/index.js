import express from 'express';
import firebase from 'firebase-admin';

import app from './server';
import {key} from './server/config/key-firebase';
firebase.initializeApp({
  credential: firebase.credential.cert(key)
});
const database = firebase.firestore();

if (module.hot) {
  module.hot.accept('./server', function() {
    console.log('🔁  HMR Reloading `./server`...');
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, function(err) {
    if (err) {
      console.error(err);
      return;
    }

    global.clients = {database};
    console.log(`> Started on port ${port}`);
  });
