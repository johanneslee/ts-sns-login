import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { User } from "./types/user";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const addUser = async (user: User): Promise<string> => {
  const userRef = await addDoc(collection(database, 'USERS'), user);
  return userRef.id;
}

export const getUsers = async (): Promise<User[]> => {
  const snapshot = await getDocs(collection(database, 'USERS'));

  let users: User[] = [];
  snapshot.forEach((user) => {
    users.push(user.data() as User);
  });

  return users;
}

export const getUser = async (username: string, password: string): Promise<User> => {
  const snapshot = await getDocs(query(collection(database, 'USERS'), where('USERNAME', '==', username), where('PASSWORD', '==', password)));

  let users: User[] = [];
  snapshot.forEach((user) => {
    users.push(user.data() as User);
  });

  let user: User = users[0];
  return user;
}