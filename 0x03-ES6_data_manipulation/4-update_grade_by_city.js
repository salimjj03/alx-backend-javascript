export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const filterdstd = getListStudents.filter((std) => std.location === city);
  return filterdstd.map((std) => {
    const findgd = newGrades.find((grad) => std.id === grad.studentId);
    return {
      ...std,
      grade: findgd ? findgd.grade : 'N/A',
    };
  });
}
