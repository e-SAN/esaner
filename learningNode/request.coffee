https = require "https"

username = 'emptist'

options =
  host: 'api.github.com'
  path: "/users/#{username}/repos"
  method: 'GET'

request = https.request options, (response) ->
  body = ''
  response.on "data", (chunk) ->
    body += chunk.toString 'utf8'
  response.on "end", ->
    console.log "Body:#{body}"

request.end()
