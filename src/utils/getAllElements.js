import { app } from '../firebase/client';
import { getFirestore, collection, getDocs,query } from 'firebase/firestore';

const getAllElement = async () => {
  try {
    const db = getFirestore(app);
    const packagesRef = collection(db, 'storeSI');
    const packagesSnapshot = await getDocs(packagesRef);
    let arrayPackages=[];
 console.log(typeof packagesSnapshot)

    // packagesSnapshot.forEach((doc,i) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   arrayPackages[i] = doc.data();
    //   console.log( "estoy dentro de getAllElements")
    //    console.log(i)
    // });
    return arrayPackages;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getAllElement };
