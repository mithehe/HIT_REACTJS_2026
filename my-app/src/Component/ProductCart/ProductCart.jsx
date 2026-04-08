import './ProductCart.scss';
function ProductCart({ product, addCart }) {
    const price = (product.price * 25000).toLocaleString('vi-VN');

    return (
        <div className="productCard">
            <img src={product.thumbnail} alt={product.title} />
            <p className='product-category'>{product.category.toUpperCase()}</p>
            <h3>{product.title}</h3>
            <p className='product-price'>{price} VND</p>
            <button className='btn' onClick={() => addCart(product)}><i className='fa-solid fa-cart-shopping'></i>   Thêm vào giỏ hàng</button>
        </div>
    )
}
export default ProductCart;