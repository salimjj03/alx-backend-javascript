export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, std) => sum + std.id, 0);
}
