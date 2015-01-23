fs = require 'fs'
console.log 'starting'
contents = fs.readFileSync './learningNode/config.json'
console.log "contents: #{contents}"
config = JSON.parse contents
console.log "Config: #{config}"
console.log "carry on executing #{config.username}"
#return
