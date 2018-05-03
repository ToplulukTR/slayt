import fetch from 'isomorphic-fetch'
import querystring from 'querystring'

import checkStatus from './fetch/check-status'
import parseJSON from './fetch/parse-json'

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'

export default function (key, q) {
  const params = {
    part: 'snippet',
    type: 'video',
    key: key,
    q: q
  }

  return fetch(`${SEARCH_URL}?${querystring.stringify(params)}`)
    .then(checkStatus)
    .then(parseJSON);
}
