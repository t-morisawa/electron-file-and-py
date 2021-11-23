const { PythonShell } = require('python-shell');

let options = {
  pythonOptions: ['-u'], // get print results in real-time
};

PythonShell.run('./py/hello.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
