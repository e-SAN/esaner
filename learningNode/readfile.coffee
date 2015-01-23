fs = require 'fs'
console.log 'starting'
fs.readFile 'README.md', (err, data) ->
  console.log "contents of file: #{data}"

console.log 'carry on executing'
#return
