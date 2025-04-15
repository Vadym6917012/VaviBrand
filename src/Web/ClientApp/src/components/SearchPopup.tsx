import { useEffect, useRef, useState } from "react";

interface SearchPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function SearchPopup({ isVisible, onClose }: SearchPopupProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [onClose]);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLElement &&
      (e.target.classList.contains("search-popup") ||
        e.target.classList.contains("search-popup-close") ||
        e.target.closest(".search-popup-close"))
    ) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="search-popup is-visible" onClick={handleOverlayClick}>
        <div className="search-popup-container">
          <form role="search" method="get" className="form-group" action="">
            <input
              ref={inputRef}
              type="search"
              id="search-form"
              className="form-control border-0 border-bottom shadow-none"
              placeholder="Введіть текст для пошуку та натисніть Enter"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              name="s"
            />
            <button
              type="submit"
              className="search-submit border-0 position-absolute bg-white"
              style={{ top: "15px", right: "15px" }}
            >
              <i
                className="bi bi-search"
                style={{ width: "24px", height: "24px" }}
              ></i>
            </button>
          </form>

          <h5 className="cat-list-title">Переглянути категорії</h5>

          <ul className="cat-list">
            <li className="cat-list-item">
              <a href="#" title="Jackets">
                Jackets
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="T-shirts">
                T-shirts
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Handbags">
                Handbags
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Accessories">
                Accessories
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Cosmetics">
                Cosmetics
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Dresses">
                Dresses
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Jumpsuits">
                Jumpsuits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
