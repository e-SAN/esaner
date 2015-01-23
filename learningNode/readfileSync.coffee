fs = require 'fs'
console.log 'starting'
content = fs.readFileSync 'README.md'
console.log "contents: #{content}"
console.log 'carry on executing'
#return
