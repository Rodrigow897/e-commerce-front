export default function ProductCard(props) {
    return(
                <div className="product-card">
                  <img src={props.src} alt="Product" className='product-img' />
                  <h3>{props.productName}</h3>
                  <p>{props.price}</p>
                  <button className='add-to-cart' data-id={props.dataId} data-name={props.dataName} data-price={props.dataPrice}>Add ao Carrinho</button>
                </div>
    )
}