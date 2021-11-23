const { PythonShell } = require('python-shell');


const run_py = () => {
  PythonShell.run('./py/hello.py', options, function (err, results) {
    if (err) throw err;
    return results;
  });
}

module.exports = {
  run_py
}
