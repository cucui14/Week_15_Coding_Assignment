//Function EditProductForm edits the product information of which is in it.
function EditProductForm({ setUpdatedProduct, product, updatedProduct, updateSelectedProduct, productId }) {
    return ( 
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter description"
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, productDescription: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="Enter price"
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, productPrice: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => updateSelectedProduct(e, product)}
                    data-bs-toggle="collapse" data-bs-target={`#flush-collapse${productId}`} aria-expanded="false" aria-controls={`flush-collapse${productId}`}
                >Submit</button>
            </form>
        </>
     );
}

export default EditProductForm;