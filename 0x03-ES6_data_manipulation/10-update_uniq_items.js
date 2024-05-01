export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  groceriesMap.forEach((value, item) => {
    if (value === 1) {
      groceriesMap.set(item, 100);
    }
  });
  return groceriesMap;
}
