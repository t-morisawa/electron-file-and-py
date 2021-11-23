const { PythonShell } = require('python-shell');


const run_py = async () => await new Promise(
  (resolve, reject) => {
    PythonShell.run('./py/hello.py', {}, function (err, results) {
      if (err) reject({ success: false, err });
      resolve({ success: true, results });
    });
  }
)

module.exports = {
  run_py
}
