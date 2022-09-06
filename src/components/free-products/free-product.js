import "./free-product.css"
import rectangle1 from "../../assets/images/rectangle-1.png"
import rectangle2 from "../../assets/images/rectangle-2.png"
import rectangle3 from "../../assets/images/rectangle-3.png"
import rectangle4 from "../../assets/images/rectangle-4.png"

function FreeProduct(){
    return(
        <div className="product__container">
            <h1 className="primary__heading">Try our other free products</h1>
            <div className="product__primary-container">
            <div className="product__sub-container">
                <img src={rectangle1}/>
                <p className="product__primary-text">Privacy Policy Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, 
                    without the hassle of inventory or packaging.</p>
            </div>
            <div className="product__sub-container">
                <img src={rectangle2}/>
                <p className="product__primary-text">Terms & Conditions Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            <div className="product__sub-container">
                <img src={rectangle3}/>
                <p className="product__primary-text">Domain Name Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, 
                    without the hassle of inventory or packaging.</p>
            </div>
            <div className="product__sub-container">
                <img src={rectangle4}/>
                <p className="product__primary-text">Invoice Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            </div>
        </div>
    )
}

export {FreeProduct}