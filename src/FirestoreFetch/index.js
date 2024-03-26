import { addDoc, collection, getDocs } from "firebase/firestore"
import { firestoreDb } from "../FirebasrConfid"

export const writeData = async(email, password) => {
    try {
        const docRef = await addDoc(collection(firestoreDb, "user"), 
        { email: email, password: password})
    console.log(docRef); 
    } catch (error) {
        console.error(error);
    }
   
}

export const readData = async() => {
    const arr = []
    try {
    const user = await getDocs(collection(firestoreDb, "user"))
user.forEach((doc)=> {
   arr.push({...doc.data(), id: doc.id});
})        
console.log(arr);
    } catch (error) {
        console.error(error);
    }
}