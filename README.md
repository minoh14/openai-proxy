## Contents:
- nodejs: Proxy server that relays requests to OpenAI
- workflow: UiPath workflow sending request to the proxy

## How to set up the proxy server:
1. Install Node.js
2. Run "npm install" under nodejs folder

## How to run the proxy server:
- Run "npm start" under nodejs folder

## curl command example:
```
$ curl https://your_proxy_fqdn:8080/proxy -H "Content-Type: application/json" -H "Api-Endpoint: https://api.openai.com/v1/chat/completions" -H "Api-Key: YOUR OPENAI API KEY" -d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."
    },
    {
      "role": "user",
      "content": "Compose a poem that explains the concept of recursion in programming."
    }
  ]
}'
```
