const { PythonShell } = require('python-shell');
const { webContents } = require('electron')

const run_py = () => {
  let pyshell = new PythonShell('./py/hello.py', {pythonOptions: ['-u']});
  const webcontent = webContents.getAllWebContents()[0]

  pyshell.on('message', function (message) {
    webcontent.send("message-from-python", message)
  });

  pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
    webcontent.send("end-python", code, signal)
  });
}

module.exports = {
  run_py
}
