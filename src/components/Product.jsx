import EditProductForm from './EditProductForm';

//Function component Product contains product title, product description, and product price. Returns EditProductForm component inside of an accordion.
function Product({ productId, product, deleteProduct, setUpdatedProduct, updatedProduct, updateSelectedProduct }) {
    return ( 

        <>
            <li className="list-group-item">
                <h3>{product.name}</h3>
                <p>{product.productDescription}</p>
                <p>Price: ${product.productPrice}</p>
                <div className="accordion" id={productId}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${productId}`} aria-expanded="false" aria-controls={`flush-collapse${productId}`}>
                                Edit Product
                            </button>
                        </h2>
                        <div id={`flush-collapse${productId}`} className="accordion-collapse collapse" data-bs-parent={`#${productId}`}>
                            <div className="accordion-body">
                                <button
                                    type="button"
                                    className="btn btn-danger my-2"
                                    onClick={() => deleteProduct(product.id)}
                                >DELETE</button>
                               <EditProductForm productId={productId} product={product} setUpdatedProduct={setUpdatedProduct} updatedProduct={updatedProduct} updateSelectedProduct={updateSelectedProduct} />
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
     );
}

export default Product;