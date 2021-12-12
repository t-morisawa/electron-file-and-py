const { PythonShell } = require('python-shell');
const { webContents } = require('electron')

const send = (channel, ...args) => {
  for (const webcontent of webContents.getAllWebContents()) {
    webcontent.send(channel, ...args)
  }
}

const run_py = () => {
  let pyshell = new PythonShell('./py/hello.py', {pythonOptions: ['-u']});
  pyshell.on('message', function (message) {
    send("python-message", message)
  });

  pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
    send("python-end", code, signal)
  });
}

module.exports = {
  run_py
}
