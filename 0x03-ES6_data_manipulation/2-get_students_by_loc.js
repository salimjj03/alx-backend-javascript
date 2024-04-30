export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((cty) => cty.location === city);
}
