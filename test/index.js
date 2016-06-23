'use strict'

require('should')

const ssh = require('../lib')
const co = require('co')
const read = require('fs').readFileSync

describe('ssh.exec(cmd)', () => {
  it('should execute a command', (done) => {
    co(function*() {
      let c = new ssh()
      yield c.connect({
        // add your test configuration here
      })

      let str = yield c.exec('uptime')
      str.should.containEql('load average')
    }).then(done).catch(done)
  })
})
