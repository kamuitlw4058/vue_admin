import axios from 'axios'

export function fetchGoodsList(query) {
  var r = axios.post('/searcher', {
    'query': {
      'bool': {
        'must': [
          { 'match': { 'title': query.title }}
        ]
      }
    },
    'size': query.limit
  }
  )
  return r
}
