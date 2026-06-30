// Firebase Configuration for ALC
// تكوين Firebase لموقع ALC

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCaEDR-MEDT3-wL375wTq53EziBLmj3y8A",
  authDomain: "alcfri.firebaseapp.com",
  projectId: "alcfri",
  storageBucket: "alcfri.firebasestorage.app",
  messagingSenderId: "429735802214",
  appId: "1:429735802214:web:99a111c2979a8da11fc4a7",
  measurementId: "G-QX1Z9BGJ6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// دالة لإضافة طلب عرض إلى Firestore
export async function submitOfferRequest(data) {
  try {
    const docRef = await addDoc(collection(db, 'offerRequests'), {
      applicantName: data.fullName,
      applicantPhone: data.phone,
      applicantEmail: data.email || null,
      offerType: `عرض رقم ${data.offerIndex}`,
      notes: data.notes || null,
      status: 'pending',
      createdAt: serverTimestamp(),
      source: 'ALC Website'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding offer request:', error);
    throw error;
  }
}

// دالة لإضافة طلب شهادة إلى Firestore
export async function submitCertificateRequest(data) {
  try {
    const docRef = await addDoc(collection(db, 'certificateRequests'), {
      studentName: data.fullNameAr,
      studentNameEn: data.fullNameEn,
      studentPhone: data.phone,
      courseType: data.courseName,
      birthPlace: data.birthPlace,
      birthDate: data.birthDate,
      gender: data.gender,
      status: 'pending',
      createdAt: serverTimestamp(),
      source: 'ALC Website'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding certificate request:', error);
    throw error;
  }
}

export { db };
