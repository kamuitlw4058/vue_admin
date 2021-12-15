import request from '@/utils/request_external'

export function fetchGoodsList(query) {
  console.log('start request!!')
  var r = request({
    url: '/searcher',
    method: 'post',
    data: {
      'query': {
        'bool': {
          'must': [
            { 'match': { 'title': '螺丝' }}
          ]
        }
      },
      'size': 10
    }
  })
  return r
}
