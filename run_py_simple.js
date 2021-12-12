const { PythonShell } = require('python-shell');

const run_py = () => {
  let pyshell = new PythonShell('./py/hello.py', {pythonOptions: ['-u']});

  pyshell.on('message', function (message) {
    console.log('message from py: ' + message);
  });

  pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
    webcontent.send("python-end", code, signal)
  });
}

module.exports = {
  run_py
}

run_py()
