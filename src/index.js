import ssh2 from 'ssh2'

export default class {
  constructor(config) {
    this.ssh = new ssh2.Client()
    this.config = config
  }

  connect(config) {
    return done => {
      let ssh = this.ssh
      ssh.connect(config || this.config || { })
      ssh.once('ready', done)
      ssh.once('error', done)
    }
  }

  exec(cmd) {
    return done => {
      this.ssh.exec(cmd, (err, stream) => {
        if (err) return done(err)
        stream.setEncoding('utf8')
        let res = ''
        stream.on('data', chunk => res += chunk)
        stream.on('end', () => done(null, res))
      })
    }
  }

  end() {
    this.ssh.end()
  }
}
