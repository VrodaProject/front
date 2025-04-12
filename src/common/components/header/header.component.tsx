import { useState, useEffect } from "react";
import { ReactComponent as Logotype } from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    const headerOffset = 100;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "header__sticky" : ""}`}>
      <div className="container">
        <div className="header__content">
        <Link to="/" className="header__logo" aria-label="Перейти на головну">
            <Logotype />
          </Link>

          <nav className="header__menu" aria-label="Головна навігація">
            <ul className="header__menu_list">
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "services")}
                >
                  Послуги
                </a>
              </li>
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#cases"
                  onClick={(e) => handleAnchorClick(e, "cases")}
                >
                  Кейси
                </a>
              </li>
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#review"
                  onClick={(e) => handleAnchorClick(e, "review")}
                >
                  Відгуки
                </a>
              </li>
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#map"
                  onClick={(e) => handleAnchorClick(e, "map")}
                >
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__contact">
            <address className="header__address">
              <p>Біла Церква, вул. Шевченка 120</p>
              <p>Графік роботи: ПН-НД 9:00-20:00 (за попереднім записом)</p>
            </address>

            <div className="header__actions">
              <a href="tel:+380961212120" className="header__phone" aria-label="Зателефонувати нам">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.64477 1.64477C3.28867 1.28867 2.71133 1.28867 2.35523 1.64477C0.430014 3.56999 0.213407 6.61788 1.84701 8.79601L3.02857 10.3714C4.33622 12.115 5.88504 13.6638 7.62857 14.9714L9.20399 16.153C11.3821 17.7866 14.43 17.57 16.3552 15.6448C16.7113 15.2887 16.7113 14.7113 16.3552 14.3552L13.7071 11.7071C13.3166 11.3166 12.6834 11.3166 12.2929 11.7071L11.2717 12.7283C11.1095 12.8905 10.8615 12.9308 10.6563 12.8281C8.28294 11.6415 6.35853 9.71706 5.17187 7.34373C5.06923 7.13846 5.10946 6.89054 5.27175 6.72825L6.29289 5.70711C6.68342 5.31658 6.68342 4.68342 6.29289 4.29289L3.64477 1.64477Z" fill="#fff" stroke="#fff" />
                </svg>
                <span>+38 (096) 121-21-20</span>
              </a>
              <a
                href="#cta"
                className="header__button"
                onClick={(e) => handleAnchorClick(e, "cta")}
              >
                Записатись
              </a>
            </div>
          </div>

          <button
            className="header__toggle"
            onClick={toggleMenu}
            aria-label="Мобільне меню"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6L18 18" stroke="#006A60" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 7H19" stroke="#006A60" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 12H19" stroke="#006A60" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 17H19" stroke="#006A60" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="header__mobile">
          <nav className="header__menu">
            <ul className="header__menu_list">
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "services")}
                >
                  Послуги
                </a>
              </li>
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#cases"
                  onClick={(e) => handleAnchorClick(e, "cases")}
                >
                  Кейси
                </a>
              </li>
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#review"
                  onClick={(e) => handleAnchorClick(e, "review")}
                >
                  Відгуки
                </a>
              </li>
              <li className="header__menu_item">
                <a
                  className="header__menu_link"
                  href="#map"
                  onClick={(e) => handleAnchorClick(e, "map")}
                >
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__wrap">
            <address className="header__address">
              <p>Біла Церква, вул. Шевченка 120</p>
              <p>Графік роботи: ПН-НД 9:00-20:00 (за попереднім записом)</p>
            </address>

            <a
              className="header__button"
              href="#cta"
              onClick={(e) => handleAnchorClick(e, "cta")}
            >
              Записатись
            </a>
          </div>
        </div>
      )}
    </header>
  );
};