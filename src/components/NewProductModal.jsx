import NewProductForm from "./NewProductForm";

//Function NewProductForm creates a new product using the NewProductForm component.
function NewProductModal({ setNewProduct, newProduct, postNewProduct }) {
    return ( 
        <>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#newProductModal">
                ADD NEW PRODUCT
            </button>

            {/* Modal */}
            <div className="modal fade" id="newProductModal" tabIndex="-1" aria-labelledby="newProductModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="newProductModalLabel">Enter New Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <NewProductForm newProduct={newProduct} setNewProduct={setNewProduct} postNewProduct={postNewProduct} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default NewProductModal;