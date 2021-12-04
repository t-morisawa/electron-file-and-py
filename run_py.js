const { PythonShell } = require('python-shell');
const { webContents } = require('electron')

const run_py = async () => {
  let pyshell = new PythonShell('./py/hello.py', {pythonOptions: ['-u']});
  const webcontent = webContents.getAllWebContents()[0]

  pyshell.on('message', function (message) {
    webcontent.send("message-from-python", message)
  });
}

module.exports = {
  run_py
}
