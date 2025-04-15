import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Aos from "aos";
import SearchPopup from "../components/SearchPopup";
import Cart from "../components/Cart";
import { CartProvider } from "../context/CartContext";

export default function Layout() {
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    Aos.init({
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: false,
      once: true,
      startEvent: "load",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: false,
    });

    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <>
      <CartProvider>
        <Header onSearchToggle={() => setSearchVisible(true)} />
        <SearchPopup
          isVisible={searchVisible}
          onClose={() => setSearchVisible(false)}
        />
        <Cart />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
}
