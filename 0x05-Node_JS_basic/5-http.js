const http = require('http');

//const args = process.argv.slice(2);
const args = process.argv[2];
const countStudents = require('./3-read_file_async');

const DATABASE = args;

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const std = await countStudents(DATABASE);
      res.end(`${std.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, host, () => {});

module.exports = app;