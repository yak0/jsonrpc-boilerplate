# JSON-RPC Express Boilerplate

[![Build Status](https://travis-ci.org/yak0/jsonrpc-boilerplate.svg?branch=master)](https://travis-ci.org/yak0/jsonrpc-boilerplate)

This is a boilerplate project of JSON-RPC version 2 server-side implementation for Express library on NodeJS with Typescript and MongoDB.

## Installation
Before install to your local environment, ensure you have installed nodejs and npm
```sh
npm install && npm build && npm start
```
You can also start on docker environment. Before that,  ensure you have installed docker and docker-compose.
In project root run:
```sh
docker-compose up
```

## Test
```sh
npm test
```

## Methods
There are 4 request methods as an example. If you are going to create another one, you should implement your class with  _`MethodInterface`_ and you should define your method in *config.ts*

#### createEntry 
(_`CreateEntryMethod`_ - _`CreateEntryParams`_)
```sh
curl -X POST \
  http://localhost:3000/rpc \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "method": "createEntry",
    "params": {
        "title": "my title",
        "content": "my content"
    },
    "id": 1
 }'
```

#### updateEntry 
(_`UpdateEntryMethod`_ - _`UpdateEntryParams`_)
```sh
curl -X POST \
  http://localhost:3000/rpc \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "method": "updateEntry",
    "params": {
        "id": "1fd41202-1759-11ea-a698-6fe04a720c0f",
        "title": "updated title"
    },
    "id": 1
 }'
```
#### deleteEntry 
(_`DeleteEntryMethod`_ - _`DeleteEntryParams`_)
```sh
curl -X POST \
  http://localhost:3000/rpc \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "method": "deleteEntry",
    "params": {
        "id": "1fd41202-1759-11ea-a698-6fe04a720c0f"
    },
    "id": 1
 }'
```
#### getEntry 
(_`GetEntryMethod`_ - _`GetEntryParams`_)
```sh
curl -X POST \
  http://localhost:3000/rpc \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "method": "getEntry",
    "params": {
        "id": "1fd41202-1759-11ea-a698-6fe04a720c0f"
    },
    "id": 1
 }'
```
#### getEntries 
(_`GetEntriesMethod`_ - _`GetEntriesParams`_)
```sh
curl -X POST \
  http://localhost:3000/rpc \
  -H 'Content-Type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "method": "getEntries",
    "params": {
        "take": 10,
        "skip": 0
    },
    "id": 1
 }'
```

License
----

MIT

