import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="offcanvas offcanvas-end" id="offcanvasCart" tabIndex={-1}>
      <div className="offcanvas-header justify-content-center">
        <button
          type="button"
          className="btn-close shadow-none"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <h4>
          Корзина{" "}
          <span className="badge bg-primary rounded-pill">
            {cartItems.length}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {cartItems.map((item, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between lh-sm"
            >
              <div>
                <h6 className="my-0">{item.name}</h6>
                <small className="text-body-secondary">
                  {item.description}
                </small>
              </div>
              <span className="text-body-secondary">₴{item.price}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Всього (ГРН)</span>
            <strong>₴{total}</strong>
          </li>
        </ul>
        <button className="btn btn-primary w-100">Оформити замовлення</button>
      </div>
    </div>
  );
};

export default Cart;
