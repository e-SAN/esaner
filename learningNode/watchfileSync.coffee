fs = require 'fs'
console.log 'starting'
contents = fs.readFileSync './learningNode/config.json'
console.log "contents: #{contents}"
config = JSON.parse contents
console.log "initial config #{config}"

fs.watchFile "./learningNode/config.json", (curr, prev)->
  console.log "config changed"
  config = JSON.parse(fs.readFileSync "./learningNode/config.json")
  console.log "new config file: #{config}"
