import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((user) => {
      console.log(`${user[1].body} ${user[0].firstName} ${user[0].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
