import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSearchToggle: () => void;
}

export default function Header({ onSearchToggle }: HeaderProps) {
  const { cartItems } = useCart();

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center w-100">
            <div className="col-auto">
              <a className="navbar-brand" href="index.html">
                VaVi Brand
              </a>
            </div>

            <div className="col-auto">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Меню
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 gap-1 gap-md-5 pe-3">
                    <li className="nav-item dropdown">
                      <Link className="nav-link active" to="#">
                        Головна
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        id="dropdownShop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Каталог
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownShop"
                      >
                        <li>
                          <Link className="dropdown-item" to="/shop">
                            Всі товари
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/shop">
                            Спортивні костюми
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/shop">
                            Боді
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/shop">
                            Майки
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Про нас
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-3 col-lg-auto">
              <ul className="list-unstyled d-flex m-0">
              <li className="account-box">
                  <Link to="index.html" className="text-uppercase mx-2">
                  <i className="bi bi-person"></i>
                  </Link>
                </li>
                <li className="wishlist-box">
                  <a href="index.html" className="text-uppercase mx-2 d-flex align-items-center">
                    <i className="bi bi-heart"></i>{" "}
                    <span className="wishlist-count d-none d-sm-block">(0)</span>
                  </a>
                </li>
                <li className="cart-box">
                  <a
                    href="#"
                    className="text-uppercase d-flex align-items-center"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                  >
                    <i className="bi bi-cart"></i>{" "}
                    <span className="cart-count d-none d-sm-block">({cartItems.length})</span>
                  </a>
                </li>
                <li className="search-box">
                  <a
                    href="#search"
                    className="search-button mx-3"
                    onClick={(e) => {
                      e.preventDefault();
                      onSearchToggle();
                    }}
                  >
                    <i
                      className="bi bi-search"
                      style={{ width: "24px", height: "24px" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
