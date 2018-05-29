import search from '../../common/lib/youtube-api-search'

const setApiRoutes = server => {
  server.get('/api/like', (req, res) => {
    // fetch user data
    const docRef = global.clients.database.collection("users").doc("selman");
    docRef.get().then(doc => {
      if (doc.exists) {
        const userData = doc.data();
        return res.send({liked: userData.liked});
      } else {
        return res.send({liked: []});
      }
    }).catch(function(error) {
      return res.send({liked: []});
    });
  });

  server.post('/api/like', (req, res) => {
    let videoId;
    try {
      videoId = JSON.parse(req.body).id;
    } catch (ex) {}

    if (!videoId) {
      return res.send({error: true});
    }

    // fetch user data
    const docRef = global.clients.database.collection("users").doc("selman");
    docRef.get().then(doc => {
      if (doc.exists) {
        const liked = doc.data().liked;
        const index = liked.indexOf(videoId);
        if (index === -1) {
          liked.push(videoId);
        } else {
          liked.splice(index, 1);
        }
        docRef.update({liked: liked});
        return res.send({liked});
      }
      return res.send({liked: []});
    }).catch(function(error) {
      return res.send({liked: []});
    });
  });

  server.get('/api/playlists', (req, res) => {
    const userId = req.query.user_id;
    if (!userId) {
      return res.send({playlists: []});
    }

    // fetch user data
    const docRef = global.clients.database.collection("users").doc("selman");
    docRef.get().then(doc => {
      if (doc.exists) {
        const userData = doc.data();
        return res.send({playlists: userData.playlists});
      } else {
        return res.send({playlists: []});
      }
    }).catch(function(error) {
      return res.send({playlists: []});
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

  // get playlists -- /api/playlists GET
  // get playlist -- /api/playlist/1 GET
  // create playlist -- /api/playlist POST
  // delete playlist -- /api/playlist DELETE
  // add video to playlist -- /api/playlist/1/video POST
  server.post('/api/playlist/:playlistId/video', (req, res) => {
    const playlistId = req.params.playlistId;
    let videoId;
    try {
      videoId = JSON.parse(req.body).id;
    } catch (ex) {}

    if (!videoId || !playlistId) {
      return res.send({error: true});
    }

    // fetch user data
    const docRef = global.clients.database.collection("playlists").doc("selman");
    docRef.get().then(doc => {
      if (doc.exists) {
        const playlists = doc.data().playlists;
        const playlist = playlists.find(playlist => playlist.id == playlistId);
        playlist.videos.push({
          id: videoId,
          vote: 0
        });
        docRef.update({playlists}).then(() => console.log('yes')).catch(err => console.log(err));
        return res.send({success: true});
      }
      return res.send({success: false});
    }).catch(function(error) {
      return res.send({success: false});
    });
  });

  server.post('/api/playlist/:playlistId/video/:videoId/:vote', (req, res) => {
    const playlistId = req.params.playlistId;
    const videoId = req.params.videoId;

    if (!videoId || !playlistId) {
      return res.send({error: true});
    }

    // fetch user data
    const docRef = global.clients.database.collection("playlists").doc("selman");
    docRef.get().then(doc => {
      if (doc.exists) {
        const playlists = doc.data().playlists;
        const playlist = playlists.find(playlist => playlist.id == playlistId);
        const video = playlist.videos.find(video => video.id == videoId);
        video.vote = req.params.vote === 'down' ? video.vote - 1 : video.vote + 1;
        docRef.update({playlists}).then(() => console.log('yes')).catch(err => console.log(err));
        return res.send({playlists});
      }
      return res.send({success: false});
    }).catch(function(error) {
      return res.send({success: false});
    });
  });
};

export default setApiRoutes;
