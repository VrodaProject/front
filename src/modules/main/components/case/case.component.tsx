import React from "react";
import caseimg1 from "../../../../assets/images/cases/img-1.webp";
import caseimg2 from "../../../../assets/images/cases/img-2.webp";
import caseimg3 from "../../../../assets/images/cases/img-3.webp";

export default function Case() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    
    if (!targetId) return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // Отступ 100px

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="cases" className="case">
      <div className="container">
        <div className="case__content">
          <div className="case__column">
            <h3 className="title">
              <span>к</span>ейси
            </h3>
            <p className="case__text pt50">
              Жінки прагнуть виглядати бездоганно, незалежно від віку. Клуб краси "VRODA" в Білій Церкві пропонує ефективні косметологічні процедури, які допоможуть усунути вікові зміни, покращити стан шкіри обличчя та удосконалити контури фігури.
            </p>
            <a 
              href="#cta" 
              className="case__link" 
              aria-label="Записатися на процедуру"
              onClick={handleScroll}
            >
              Записатись
            </a>
          </div>

          <div className="case__column">
            <div className="case__image">
              <img src={caseimg1} alt="Фракційний RF-ліфтинг для омолодження шкіри" />
            </div>
            <h3 className="case__title">
              Фракційний<br />RF-ліфтинг
            </h3>
            <p className="case__text">
              Інноваційна методика підтяжки та розгладження зморшок обличчя. Процедура ефективно працює на зонах: обличчя, шия, декольте, руки та ін. ділянки тіла.
            </p>

            <ul className="case__list">
              <li className="case__list_item">Також RF-ліфтинг допомагає:</li>
              <li className="case__list_item">✔ усунути рубці та постакне</li>
              <li className="case__list_item">✔ усунути дряблість і в'ялість шкіри</li>
              <li className="case__list_item">✔ скорегувати шрами та розтяжки</li>
            </ul>
          </div>

          <div className="case__column">
            <h3 className="case__title">
              Контурна пластика
            </h3>
            <p className="case__text">
              Ін'єкційні методики допомагають повернути втрачені з віком об'єми, створити гармонійні пропорції обличчя і підкреслити природні риси.
            </p>

            <ul className="case__list">
              <li className="case__list_item">Популярні зони корекції філерами:</li>
              <li className="case__list_item">✔ носогубні складки, заповнення мімічних зморшок</li>
              <li className="case__list_item">✔ збільшення об'єму та контурна пластика губ</li>
              <li className="case__list_item">✔ підборіддя, овал обличчя</li>
              <li className="case__list_item">✔ усунення «кілець Венери»</li>
            </ul>

            <div className="case__image">
              <img src={caseimg2} alt="Контурна пластика обличчя для гармонії рис" />
            </div>
          </div>

          <div className="case__column">
            <div className="case__image">
              <img src={caseimg3} alt="Ламінування вій для виразного погляду" />
            </div>
            <h3 className="case__title">
              Ламінування вій
            </h3>
            <p className="case__text">
              Ламінування (ліфтинг вій, завивка, біозавивка) вій — чудовий спосіб зробити погляд більш виразним та відкритим.
            </p>

            <ul className="case__list">
              <li className="case__list_item">За 1 годину процедури ви отримаєте:</li>
              <li className="case__list_item">✔ відкритий погляд на 1,5-2 місяці</li>
              <li className="case__list_item">✔ гарний вигин вій</li>
              <li className="case__list_item">✔ насичений чорний колір</li>
              <li className="case__list_item">✔ живлення (ботокс) вій</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}