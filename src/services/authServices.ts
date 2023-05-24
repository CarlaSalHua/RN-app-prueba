import {auth} from 'src/config/firebaseConfig';
import {ISignUp} from 'src/types';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default {
  signUp: async ({user, password}: ISignUp) => {
    const response = await createUserWithEmailAndPassword(auth, user, password);

    return response.user;
  },
};
