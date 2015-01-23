fs = require 'fs'
console.log 'starting'
fs.writeFileSync "./learningNode/write-sync", "something"
console.log "finished"
#return
