import React, { useEffect } from 'react';
import ProductDetail from './containers/ProductDetail';
import ProductList from './containers/ProductList';
import firebase from 'firebase/compat/app';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import './App.css';

function App() {
  const firebaseApp = firebase.apps[0];

  async function getProducts(db: any) {
    const productsCol = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map((doc: { data: () => any }) => doc.data());
    return productsList;
  }

  useEffect(() => {
    getProducts(db).then((data) => console.log(data, 'data'));
  }, []);

  return (
    <div className="App">
      <code>
        <pre>{JSON.stringify(firebaseApp?.options, null, 2)}</pre>
      </code>
      <ProductList />
      <ProductDetail />
    </div>
  );
}

export default App;
