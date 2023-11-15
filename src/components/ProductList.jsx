import Product from "./Product";

//Function component ProductList maps through products array to Product components
function ProductList({products, deleteProduct, setUpdatedProduct, updatedProduct, updateSelectedProduct}) {
    return ( 
        <>
            <ul className="list-group">
                {/* <li className="list-group-item active" aria-current="true">An active item</li> */}
                {products.map(product => <Product key={product.id} product={product} productId={product.id} deleteProduct={deleteProduct} setUpdatedProduct={setUpdatedProduct} updatedProduct={updatedProduct} updateSelectedProduct={updateSelectedProduct} />)}
            </ul>
        </>
     );
}

export default ProductList;