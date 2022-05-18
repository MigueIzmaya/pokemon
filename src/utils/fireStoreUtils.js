import { query, 
         where, 
         collection, 
         getDocs, 
         orderBy, 
         increment, 
         serverTimestamp, 
         setDoc, 
         updateDoc, 
         doc, 
         getDoc } from '@firebase/firestore';

import db from './firebaseConfig';

export const searchProductsInStock = async (idCategory) => {

    let queryResult = idCategory ? 
                        query(collection(db, "products"), where('category', '==', idCategory)) : 
                        query(collection(db, "products"), orderBy("title"));

    const querySnapshot = await getDocs(queryResult);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const searchProductByIdItem = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      console.log("No existe ese elemento");
    }
}

export const createOrder = (currentContext) => {
    currentContext.cartList.forEach(async (item) => {
        const itemRef = doc(db, "products", item.id);
        
        await updateDoc(itemRef, {
            stock: increment(-item.countProducts),
        });
    });
    
    let order = {
        buyer: {
            name: "Miguel Izmaya",
            phone: "5522448899",
            email: "miguelizmaya@gmail.com",
        },
        date: serverTimestamp(),
        items: currentContext.cartList.map((item) => ({
            id: item.id,
            price: item.price,
            title: item.title,
            countProducts: item.countProducts,
        })),
        total: currentContext.calculateTotal(),
    };

    const createOrderInFirestore = async (order) => {
        const newOrderRef = doc(collection(db, "orders"));    
        await setDoc(newOrderRef, order);    
        return newOrderRef;
    };

    createOrderInFirestore(order)
        .then((result) => alert("Tu orden ha sido creada con éxito. "))
        .catch((error) => console.log(error));
        
        currentContext.removeAllElements();
};