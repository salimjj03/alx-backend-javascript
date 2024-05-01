export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let cnt = weakMap.get(endpoint) || 0;
  cnt += 1;
  weakMap.set(endpoint, cnt);

  if (cnt > 4) {
    throw new Error('Endpoint load is high');
  }
}
