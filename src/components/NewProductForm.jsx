//Function NewProductForm creates a new product.
function NewProductForm({ newProduct, setNewProduct, postNewProduct }) {
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
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter description"
                        onChange={(e) => setNewProduct({...newProduct, productDescription: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        placeholder="Enter price"
                        onChange={(e) => setNewProduct({...newProduct, productPrice: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={(e) => postNewProduct(e)}
                >Submit</button>
            </form>
        </>
     );
}

export default NewProductForm;