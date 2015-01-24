https = require "https"

username = 'emptist'
#github現在需要加上headers那些內容，我自己找文檔弄出來的
getRepos = (username, callback) ->
  options =
    host: 'api.github.com'
    path: "/users/#{username}/repos"
    method: 'GET'
    headers:
      "Accept": "application/json"
      "User-Agent": "#{username}"

  request = https.request options, (response) ->
    body = ''
    response.on "data", (chunk) ->
      body += chunk.toString 'utf8'
    response.on "end", ->
      json = JSON.parse body # for all repos
      callback json
  request.end()


getRepos username, (repos) ->
  console.log "#{username} has #{repos.length} repositories"
username = 'uniquey'
getRepos username, (repos) ->
  console.log "#{username} has #{repos.length} repositories"
