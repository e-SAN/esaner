http = require "http"
console.log "Starting"
host = "127.0.0.1"
port = 1337
server = http.createServer (req, res) ->
  console.log "Received request: " + req
  response.writeHead 200, {"content-type":"text/plain"}
  response.end "Hello world"

server.listen port, host, ->
  console.log "listening" + host + ":" + port
