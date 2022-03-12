# pastecord-wrapper
#### A [Pastecord](https://pastecord.com/) API wrapper for uploading documents.

### Installation
---
#### npm
```
$ npm i pastecord-wrapper
```

### Usage
---
Construct a new client and await `client.publish`:
```js
const Pastecord = require("pastecord-wrapper");

const client = new Pastecord();

(async () => {
    const url = await client.publish("Hello, World!");
    console.log(url);
})();
```

### Author
---
Justin K.

### License
---
MIT
