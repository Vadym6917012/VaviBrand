export default function Footer() {
  return (
    <footer id="footer" className="mt-5">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between py-5">
          <div className="col-md-3 col-sm-6">
            <div className="footer-menu footer-menu-001">
              <div className="footer-intro mb-4">
                <a href="index.html">VaVi Brand</a>
              </div>
              <p>
                VaVi Brand — це інноваційний бренд, який пропонує стильні та
                якісні товари для кожного. Ми прагнемо забезпечити наших
                клієнтів тільки найкращими продуктами, поєднуючи сучасні
                тенденції моди з доступними цінами. Наша місія — надати вам
                неперевершений досвід покупок.
              </p>
              <div className="social-links">
                <ul className="list-unstyled d-flex flex-wrap gap-3">
                  <li>
                    <a href="#" className="text-secondary">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-menu footer-menu-002">
              <h5 className="widget-title text-uppercase mb-4">Швидкі посилання</h5>
              <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                <li className="menu-item">
                  <a href="index.html" className="item-anchor">
                    Головна
                  </a>
                </li>
                <li className="menu-item">
                  <a href="index.html" className="item-anchor">
                    Каталог
                  </a>
                </li>
                <li className="menu-item">
                  <a href="blog.html" className="item-anchor">
                    Про нас
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-menu footer-menu-004 border-animation-left">
              <h5 className="widget-title text-uppercase mb-4">Контакт-центр</h5>
              <p>
                Маєте якісь пропозиції чи заперечення?{" "}
                <a
                  href="mailto:contact@yourcompany.com"
                  className="item-anchor"
                >
                  contact@yourcompany.com
                </a>
              </p>
              <p>
                Потрібна підтримка? Телефонуйте!.{" "}
                <a href="tel:+43 720 11 52 78" className="item-anchor">
                  (067) 777 22 536
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top py-4">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              © 2025 VaVi Brand. All Rights Reserved. | Designed with ❤ by VaVi
              Team.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
