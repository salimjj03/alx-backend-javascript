export default function createIteratorObject(report) {
  function* employeeGenerator() {
    for (const departmentEmployees of Object.values(report.allEmployees)) {
      for (const employee of departmentEmployees) {
        yield employee;
      }
    }
  }
  return {
    [Symbol.iterator]: employeeGenerator,
  };
}
