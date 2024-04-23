export default function getFullResponseFromAPI(success) {
  const p = new Promise((resolved, reject) => {
    if (success) {
      resolved({ status: 200, body: 'Success' });
    } else reject(new Error('The fake API is not working currently'));
  });
  return p;
}
