import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/modules/pagination.css";
import "../../node_modules/swiper/modules/navigation.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    new Swiper(".main-swiper", {
      slidesPerView: 3,
      height: 300,
      modules: [Navigation],
      direction: "horizontal",
      loop: true,
      spaceBetween: 100,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        300: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 80 },
      },
    });
  }, []);

  return (
    <>
      <section id="billboard" className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <h1
              className="section-title text-center mt-4"
              style={{ fontSize: "4.5rem" }}
              data-aos="fade-up"
            >
              New Collections
            </h1>
            <div
              className="col-md-6 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
                Відкрийте для себе нашу нову колекцію, що поєднує в собі
                елегантність, комфорт та сучасний стиль. У нашій колекції ви
                знайдете модні та якісні речі, які додадуть родзинку вашому
                гардеробу. Не пропустіть можливість оновити свій стиль з новими
                трендами!
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="swiper main-swiper py-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="swiper-wrapper d-flex border-animation-left">
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src={"src/assets/images/IMG_4949.jpg"}
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src={"src/assets/images/IMG_4991.jpg"}
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p className="light-text">
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src={"src/assets/images/IMG_5229.jpg"}
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src={"src/assets/images/IMG_5262-1.jpg"}
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src={"src/assets/images/IMG_5416.jpg"}
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Out crop sweater
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-item image-zoom-effect">
                    <div className="image-holder">
                      <a href="#">
                        <img
                          src={"src/assets/images/IMG_4250.jpg"}
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="banner-content py-4">
                      <h5 className="element-title text-uppercase">
                        <a href="index.html" className="item-anchor">
                          Soft leather jackets
                        </a>
                      </h5>
                      <p>
                        Scelerisque duis aliquam qui lorem ipsum dolor amet,
                        consectetur adipiscing elit.
                      </p>
                      <div className="btn-left">
                        <a
                          href="#"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon-arrow swiper-button-prev"></div>
            <div className="icon-arrow swiper-button-next"></div>
          </div>
        </div>
      </section>
      <section className="features py-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-oas-delay="0"
            >
              <div className="py-5">
                <i
                  className="bi bi-calendar"
                  style={{ width: "38px", height: "38px" }}
                ></i>
                <h4 className="element-title text-capitalize my-3">
                  Зробити замовлення
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-oas-delay="300"
            >
              <div className="py-5">
                <i className="bi bi-box2"></i>
                <h4 className="element-title text-capitalize my-3">
                  Забрати замовлення
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-oas-delay="600"
            >
              <div className="py-5">
                <i className="bi bi-box2-heart"></i>
                <h4 className="element-title text-capitalize my-3">
                  Спеціальне пакування
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-oas-delay="900"
            >
              <div className="py-5">
                <i className="bi bi-arrow-return-left"></i>
                <h4 className="element-title text-capitalize my-3">
                  Безкоштовне повернення
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies
                  quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories overflow-hidden">
        <div className="container">
          <div className="open-up" data-aos="zoom-out">
            <div className="row">
              <div className="col-md-4">
                <div className="cat-item image-zoom-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src={"src/assets/images/IMG_4949.jpg"}
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                  </div>
                  <div className="category-content">
                    <div className="product-button">
                      <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      >
                        Боді
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cat-item image-zoom-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src={"src/assets/images/IMG_4949.jpg"}
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                  </div>
                  <div className="category-content">
                    <div className="product-button">
                      <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      >
                        Майки
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cat-item image-zoom-effect">
                  <div className="image-holder">
                    <a href="index.html">
                      <img
                        src={"src/assets/images/IMG_4949.jpg"}
                        alt="categories"
                        className="product-image img-fluid"
                      />
                    </a>
                  </div>
                  <div className="category-content">
                    <div className="product-button">
                      <a
                        href="index.html"
                        className="btn btn-common text-uppercase"
                      >
                        Спортивні костюми
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="newsletter bg-light"
        style={{ background: "url(src/assets/pattern-bg.png) no-repeat" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 py-5 my-5">
              <div className="subscribe-header text-center pb-3">
                <h3 className="section-title text-uppercase">
                  Отримувати новинки першими
                </h3>
              </div>
              <form id="form" className="d-flex flex-wrap gap-2 shadow-none">
                <input
                  type="text"
                  name="email"
                  placeholder="Ваш email"
                  className="form-control form-control-lg"
                />
                <button className="btn btn-dark btn-lg text-uppercase w-100">
                  Підписатися
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram position-relative">
        <div className="d-flex justify-content-center w-100 position-absolute bottom-0 z-1">
          <a
            href="https://www.instagram.com/vavi_brand?igsh=ZWo3N2F2MzB2NDJn"
            className="btn btn-dark px-5"
          >
            Підписуйтеся на Instagram
          </a>
        </div>
        <div className="row g-0">
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/vavi_brand?igsh=ZWo3N2F2MzB2NDJn"
                target="_blank"
              >
                <img
                  src={"src/assets/images/IMG_4949.jpg"}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/vavi_brand?igsh=ZWo3N2F2MzB2NDJn"
                target="_blank"
              >
                <img
                  src={"src/assets/images/IMG_4949.jpg"}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/vavi_brand?igsh=ZWo3N2F2MzB2NDJn"
                target="_blank"
              >
                <img
                  src={"src/assets/images/IMG_4949.jpg"}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/vavi_brand?igsh=ZWo3N2F2MzB2NDJn"
                target="_blank"
              >
                <img
                  src={"src/assets/images/IMG_4949.jpg"}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/vavi_brand?igsh=ZWo3N2F2MzB2NDJn"
                target="_blank"
              >
                <img
                  src={"src/assets/images/IMG_4949.jpg"}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a
                href="https://www.instagram.com/vavi_brand?igsh=ZWo3N2F2MzB2NDJn"
                target="_blank"
              >
                <img
                  src={"src/assets/images/IMG_4949.jpg"}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
