const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, dataa) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const response = [];
      let msg;
      const data = dataa.toString().split('\n');
      let std = data.filter((item) => item);
      std = std.map((item) => item.split(','));
      const stdLen = std.length ? std.length - 1 : 0;
      msg = `Number of students: ${stdLen}`;
      console.log(msg);

      response.push(msg);

      const fields = {};
      std.forEach((std) => {
        const field = std[3];
        const firstName = std[0];

        if (fields[field]) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      });
      delete fields.field;
      for (const [field, names] of Object.entries(fields)) {
        msg = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        console.log(msg);

        response.push(msg);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
