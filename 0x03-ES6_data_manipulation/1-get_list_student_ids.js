export default function getListStudentIds(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) {
    return [];
  }
  arr.map((arr1) => newArr.push(arr1.id));
  return newArr;
}
