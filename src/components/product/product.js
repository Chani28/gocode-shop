import "./product.css";

function Product()
{
    return
    (
        <div className="product-card">
            <div className="product-image">
                <img
                src="https://photos6.spartoo.eu/photos/764/7646428/7646428_500_A.jpg"
                alt="sweater img" 
                />
            </div>
            <div className="product-info">
          <h5>Winter Jacket</h5>
          <h6>$99.99</h6>
        </div>
      </div>
    );
}
export default Product;