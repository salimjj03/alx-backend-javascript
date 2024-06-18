const fs = require('fs');

function countStudents(file) {
  let data;
  try {
    data = fs.readFileSync(file);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.toString().split('\n');
  let std = data.filter((item) => item);
  std = std.map((item) => item.split(','));
  const stdLen = std.length ? std.length - 1 : 0;
  console.log(`Number of students: ${stdLen}`);

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

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
