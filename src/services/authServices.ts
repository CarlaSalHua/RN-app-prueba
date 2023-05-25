import {auth} from 'src/config/firebaseConfig';
import {ILogin, ISignUp} from 'src/types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export default {
  signUp: async ({user, password}: ISignUp) => {
    const response = await createUserWithEmailAndPassword(auth, user, password);

    return response.user;
  },
  login: async ({user, password}: ILogin) => {
    const response = await signInWithEmailAndPassword(auth, user, password);

    return response.user;
  },
  logOut: async () => {
    await signOut(auth);
  },
};
