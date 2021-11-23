const { PythonShell } = require('python-shell');


PythonShell.run('./py/hello.py', options, function (err, results) {
  if (err) throw err;
  console.log('results: %j', results);
});
