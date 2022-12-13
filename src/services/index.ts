import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getProducts = async (db: any) => {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);

  const productsList = productsSnapshot.docs.map((doc: { data: () => any }) => doc.data());
  return productsList;
};

export const addProduct = async (product: any) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    console.log("Product added with ID: ", docRef);
  } catch (e) {
    console.error("Error adding product: ", e);
  }
};

export const createUser = async (user: any) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("User created with ID: ", docRef);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
};
