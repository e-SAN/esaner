http = require "http"

stockid = "1000001,1000002"
#github現在需要加上headers那些內容，我自己找文檔弄出來的
getQuote = (stockid, callback) ->
  options =
    host: 'api.money.126.net'
    path: "/data/feed/#{stockid}"
    method: 'GET'

  request = http.request options, (response) ->
    body = ''
    response.on "data", (chunk) ->
      body += chunk.toString 'utf8'
    response.on "end", ->
      json = body #JSON.parse body # for all repos
      callback json
  request.end()

# 測試成功，可以工作
getQuote stockid, (repos) ->
  _ntes_quote_callback = (args) -> args
  obj = eval repos
  q = (quotes for id, quotes of obj)
  console.log obj[stockid.split(',')[0]]
