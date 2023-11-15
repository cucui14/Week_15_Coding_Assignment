import './App.css';
import React, { useState, useEffect } from 'react';
import NewProductModal from './components/NewProductModal.jsx';
import ProductList from './components/ProductList.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

//PRODUCTS API
const PRODUCTS_API = 'https://65396bb3e3b530c8d9e864b9.mockapi.io/api/v1/product/';

//Function app component
function App() {
  //Sets useState for products
  const [products, setProducts] = useState([]);
  //Sets useState for new product
  const [newProduct, setNewProduct] = useState({
    name: '',
    productDescription: '',
    productPrice: ''
  });
  //Sets useState for selected product to edit
  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    productDescription: '',
    productPrice: ''
  });


  //GET PRODUCTS
  const getProducts = () => {
    fetch(PRODUCTS_API)
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  //POST NEW PRODUCT
  const postNewProduct = (e) => {

    e.preventDefault();

    fetch(PRODUCTS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    }).then(() => getProducts());
  };

  //UPDATE PRODUCT
  const updateSelectedProduct = (e, productObject) => {
    e.preventDefault();

    let updatedProductObject = {
        ...productObject,
        name: updatedProduct.name,
        productDescription: updatedProduct.productDescription,
        productPrice: updatedProduct.productPrice
    };

    fetch(PRODUCTS_API + productObject.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProductObject)
    }).then(() => getProducts());
    setUpdatedProduct({
    name: '',
    productDescription: '',
    productPrice: ''
    });
    console.log(updatedProduct);
  };

  //DELETE PRODUCT
  const deleteProduct = (id) => {
    fetch(PRODUCTS_API + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => getProducts());
  };

  console.log(products);

  //Returns Products title, NewProductModal, and ProductList components
  return (
    <>
      <div className='container my-20'>
        <h2 className='text-center'>Products</h2>
        <NewProductModal newProduct={newProduct} setNewProduct={setNewProduct} postNewProduct={postNewProduct} />
        <ProductList products={products} deleteProduct={deleteProduct} setUpdatedProduct={setUpdatedProduct} updatedProduct={updatedProduct} updateSelectedProduct={updateSelectedProduct} />
      </div>
    </>
  )
};

export default App;