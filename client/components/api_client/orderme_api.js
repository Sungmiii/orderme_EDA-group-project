import request from 'superagent'

export function getLevles() {
    return request.get('/api/v1/game')
        .then(res => {
            const level = res.body
            console.log('do we get server api data', level)
            return level
        })

}