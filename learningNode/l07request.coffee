https = require "https"

username = 'emptist'
#github現在需要加上headers那些內容，我自己找文檔弄出來的
options =
  host: 'api.github.com'
  path: "/users/#{username}/repos"
  method: 'GET'
  headers:
    "Accept": "application/json"
    "User-Agent": "emptist"

request = https.request options, (response) ->
  body = ''
  response.on "data", (chunk) ->
    body += chunk.toString 'utf8'
  response.on "end", ->
    json = JSON.parse body # for all repos
    arr = [] # there's better way to use for...in..
    for repo in json
      arr.push [
        repo.name
        repo.description
      ]
    console.log "Repos: #{arr}"

request.end()
