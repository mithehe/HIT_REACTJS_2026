import './Cart.scss';


const Cart = ({ cartItems, increaseQ, decreaseQ, removeItem, calTotal }) => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * 25000 * item.quantity), 0);

    return (
        <div className="cart">
            <h2>Giỏ hàng của bạn</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.thumbnail} alt={item.title} />
                            <div className='inforCard'>
                                <h3>{item.title}</h3>
                                <p>Giá: {(item.price * 25000).toLocaleString('vi-VN')} VND</p>
                                <div className='sl'>
                                    <div className='quantity'>
                                        <button onClick={() => decreaseQ(item.id)} disabled={item.quantity <= 1}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQ(item.id)} >+</button>
                                    </div>

                                    <button onClick={() => removeItem(item.id)}>Xóa</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3>Tổng tiền: {total.toLocaleString('vi-VN')} VND</h3>
                    <button className="btn-total" onClick={calTotal}>
                        Thanh toán ngay
                    </button>
                </>
            )}
        </div>
    );
};
export default Cart;