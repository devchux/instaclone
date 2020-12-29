const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer('/', (req, res) => {
    res.writeHead(200, {
            'content-type': 'text/html'
    })
    let readStream = fs.createReadStream(path.resolve(__dirname, 'Public', 'index.html'), 'utf-8')
    readStream.pipe(res)
})

server.listen(5000, 'localhost')