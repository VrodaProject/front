import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../../assets/images/footer-logo.svg";
import instIcon from "../../../assets/images/footer-inst.svg";
import facebookIcon from "../../../assets/images/footer-facebook.svg";
import Map from "@app/modules/main/components/map/map.component";

export const Footer = () => {
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    // Якщо ми вже на головній сторінці
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Якщо на іншій сторінці - перенаправляємо на головну з хешем
      navigate(`/#${id}`);
      
      // Після навігації прокручуємо до елементу
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Невелика затримка для завантаження сторінки
    }
  };

  return (
    <>
      <Map />
      <div className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__content_top">
              <div className="footer__content_container">
                <Link className="footer__logo" to="/" aria-label="На головну сторінку">
                  <img src={logoImage} alt="Салон краси Врода логотип" />
                </Link>
                <ul className="footer__menu">
                  <li className="footer__menu_item">
                    <button
                      className="footer__menu_link"
                      onClick={() => handleScrollTo("services")}
                    >
                      Послуги
                    </button>
                  </li>
                  <li className="footer__menu_item">
                    <button
                      className="footer__menu_link"
                      onClick={() => handleScrollTo("cases")}
                    >
                      Кейси
                    </button>
                  </li>
                  <li className="footer__menu_item">
                    <button
                      className="footer__menu_link"
                      onClick={() => handleScrollTo("review")}
                    >
                      Відгуки
                    </button>
                  </li>
                  <li className="footer__menu_item">
                    <button
                      className="footer__menu_link"
                      onClick={() => handleScrollTo("contact")}
                    >
                      Контакти
                    </button>
                  </li>
                </ul>
              </div>
              <div className="footer__review">
                <p>Ваш відгук важливий для нас</p>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJ_RI2IwBB00ARAUJhqiEAn_8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Залишити відгук"
                >
                  залишити відгук
                </a>
              </div>
            </div>
            <div className="footer__content_bottom">
              <div className="footer__column">
                <div className="footer__link_wrap">
                  <Link className="footer__link" to="/privacy-policy">
                    Політика конфіденційності
                  </Link>
                  <Link className="footer__link" to="/data-processing-procedure">
                    Порядок обробки даних
                  </Link>
                </div>
              </div>
              <div className="footer__column">
                <div className="footer__social">
                  <div className="footer__social_wrap">
                    <a
                      href="https://www.instagram.com/vroda_club_estetic"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Слідкуйте за нами в Instagram"
                    >
                      <img src={instIcon} alt="Врода Instagram" />
                    </a>
                    <a
                      href="https://www.facebook.com/vroda.club.estetic"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Слідкуйте за нами в Facebook"
                    >
                      <img src={facebookIcon} alt="Врода Facebook" />
                    </a>
                  </div>
                  <p className="footer__social_text">
                    Підписуйтесь, щоб бути курсі усіх новинок!
                  </p>
                </div>
              </div>
              <div className="footer__column">
                <p className="footer__copyright">
                  © 2025 VRODA. Всі права захищені.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};