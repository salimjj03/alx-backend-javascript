export default function getListStudentIds(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) {
    return [];
  }
  arr.forEach((arr1) => {
    newArr.push(arr1.id);
  });
  return newArr;
}
