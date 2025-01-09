import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvLnFwdEwIY1ZPF_DqXN13tnR2q5VTRfc",
    authDomain: "tot-academy-ee1fc.firebaseapp.com",
    projectId: "tot-academy-ee1fc",
    storageBucket: "tot-academy-ee1fc.firebasestorage.app",
    messagingSenderId: "224148652911",
    appId: "1:224148652911:web:d46fba52e1dcc7a3e41e9a"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const colRef = collection(db, 'tot-comments');
export const courseIBRef = collection(db, 'tot-courses/IB/courses');
export const courseIGCSERef = collection(db, 'tot-courses/IGCSE/courses');
export const courseMYPRef = collection(db, 'tot-courses/MYP/courses');
export const courseBGRRef = collection(db, 'tot-courses/BG/courses');

export const getComments = async () => {
    try {
        const snapshot = await getDocs(colRef);
        const comments = snapshot.docs.map((doc) => doc.data());
        return comments;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getIBCourses = async () => {
    try {
        const snapshot = await getDocs(courseIBRef);
        const courses = snapshot.docs.map((doc) => doc.data());
        return courses;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getIGCSECourses = async () => {
    try {
        const snapshot = await getDocs(courseIGCSERef);
        const courses = snapshot.docs.map((doc) => doc.data());
        return courses;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getMYPCourses = async () => {
    try {
        const snapshot = await getDocs(courseMYPRef);
        const courses = snapshot.docs.map((doc) => doc.data());
        return courses;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getBGCourses = async () => {
    try {
        const snapshot = await getDocs(courseBGRRef);
        const courses = snapshot.docs.map((doc) => doc.data());
        return courses;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
};

