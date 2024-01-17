// firebaseFunctions.js
import {getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../utils/firebaseConnect';
const addPackage = async (data) => {

  try {
    const docRef = await addDoc(collection(getFirestore(app), 'storeSI'), {
      code: data.code,
      name_package: data.name_package,
      delivered: data.delivered,
      state: data.state,
      

    });
    console.log('Documento agregado con ID:', docRef.id);
    return docRef.id; // Puedes devolver el ID del documento agregado si lo necesitas
  } catch (error) {
    console.log(collection)
    console.error('Error al agregar el documento:', error);
  }
};

export { addPackage } ;
