import {onAuthStateChanged} from 'firebase/auth';
import {useEffect} from 'react';
import {auth} from 'src/config/firebaseConfig';
import {useAppDispatch} from 'src/redux/hooks';
import {setUser} from 'src/redux/slices/authSlice';

/**
 * controla el estado de autentificacion de un usuario
 */
export default function useAuth() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    /**
     * onAuthStateChanged se ejecuta cada vez que hay una actuaalizacion en
     * el estado de autentificacion de firebase
     */
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const {displayName, email, photoURL, uid} = user;
        dispatch(
          setUser({
            displayName,
            email,
            photoURL,
            uid,
            isAuth: true,
          }),
        );
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
