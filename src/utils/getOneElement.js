import { db } from './firebaseConnect';
import { getDocs } from 'firebase/firestore';

const getElement = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(db,collectionName);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data().name_package);
  
        })
      } catch (e) {
          console.error('Error al agregar el documento: ', e);
      }
    }

    export { getElement }