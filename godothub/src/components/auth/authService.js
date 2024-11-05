import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const registerUser = async (email, password, displayName, avatar) => {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  let avatarUrl = '';

  if (avatar) {
    const avatarRef = ref(storage, `avatars/${user.uid}/${avatar.name}`);
    await uploadBytes(avatarRef, avatar);
    avatarUrl = await getDownloadURL(avatarRef);
  }

  await updateProfile(user, {
    displayName: displayName,
    photoURL: avatarUrl || null,
  });

  return user;
};

export const loginUser = async (email, password) => {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
