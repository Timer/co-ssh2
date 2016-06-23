# co-ssh2
A SSH client for generators with co.

### Install
```
$ npm i co-ssh2 -S
```

### Usage
```js
import ssh from 'co-ssh2'

...
let c = ssh()
yield c.connect({ ... })
yield c.exec('uptime')
c.end()
...
```
