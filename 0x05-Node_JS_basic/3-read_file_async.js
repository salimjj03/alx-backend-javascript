const fs = require('fs').promises;

function countStudents(file) {
  return fs.readFile(file, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      if (lines.length < 2) {
        console.log('Number of students: 0');
        return;
      }

      const students = lines.slice(1).map((line) => line.split(',')).filter((line) => line.length === 4);
      const studentCount = students.length;

      console.log(`Number of students: ${studentCount}`);

      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const firstName = student[0];

        if (fields[field]) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      console.error('Cannot load the database');
    });
}

module.exports = countStudents;
