http = require "http"
fs = require "fs"
console.log "Starting"
{host, port} = JSON.parse fs.readFileSync "config.json"

server = http.createServer (req, res) ->
  console.log "Received request: " + req.url
  fs.readFile "./public" + req.url, (err, data)->
    if err?
      res.writeHead 404, "Content-type":"text/plain"
      res.end "Sorry the page not found"
    else
      res.writeHead 200, {"content-type":"text/html"}
      res.end data

server.listen port, host, ->
  console.log "listening " + host + ":" + port

fs.watchFile "config.json", ->
  {host, port} = JSON.parse fs.readFileSync "config.json"
  server.close() # for changing
  server.listen port, host, ->
    console.log "listening " + host + ":" + port
