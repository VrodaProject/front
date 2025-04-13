import { useEffect } from "react";

export default function Ddpp() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
      <section className="privacy">
        <h1 className="privacy__title">Політика обробки персональних даних</h1>
        <div className="privacy__container">
          <p className="privacy__container_text">
            Салон краси Vroda (далі — «Салон») дотримується законодавства України щодо захисту персональних даних та піклується про безпеку ваших даних. Ця Політика описує, які персональні дані ми збираємо, як їх обробляємо та зберігаємо.
          </p>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Інформація про компанію</p>
          <div className="privacy__container_text">
            Салон краси Vroda
            <ul>
              <li>Адреса: вулиця Шевченка, 120, Біла Церква, Київська область, Україна, 09100</li>
              <li>Телефон: <a href="tel:+380961212120">+380 96 121 2120</a></li>
              <li>Вебсайт: <a href="https://vroda.club">vroda.club</a></li>
            </ul>
          </div>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Збір та обробка персональних даних</p>
          <p className="privacy__container_text">
            Ми збираємо наступні персональні дані:
          </p>
          <ul>
            <li>Ім’я та прізвище</li>
            <li>Номер телефону</li>
            <li>Інформація про обрану послугу</li>
          </ul>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Цілі обробки персональних даних</p>
          <p className="privacy__container_text">
            Ми використовуємо ваші персональні дані для наступних цілей:
          </p>
          <ul>
            <li>Обробка та підтвердження бронювання послуг</li>
            <li>Зв'язок з вами щодо вашого запису на послугу</li>
            <li>Відправка важливих повідомлень про зміни в обслуговуванні</li>
          </ul>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Правова основа обробки даних</p>
          <p className="privacy__container_text">
            Обробка ваших персональних даних здійснюється на підставі вашої згоди, яку ви надаєте при заповненні форми для бронювання послуг.
          </p>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Передача персональних даних третім особам</p>
          <p className="privacy__container_text">
            На даний момент ми не передаємо ваші персональні дані третім особам.
          </p>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Зберігання даних</p>
          <p className="privacy__container_text">
            Ваші персональні дані зберігаються протягом часу, необхідного для виконання бронювання послуг. Після завершення надання послуг дані будуть видалені з нашої системи.
          </p>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Права клієнта</p>
          <p className="privacy__container_text">
            Ви маєте право на:
          </p>
          <ul>
            <li>Запит на доступ до своїх персональних даних</li>
            <li>Виправлення або оновлення своїх даних</li>
            <li>Видалення своїх даних</li>
            <li>Обмеження обробки ваших даних</li>
            <li>Переносимість даних</li>
          </ul>
          <p className="privacy__container_text">
            Для реалізації своїх прав, будь ласка, звертайтесь до нас за телефоном: <a href="tel:+380961212120">+380 96 121 2120</a>.
          </p>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Зміни в політиці обробки персональних даних</p>
          <p className="privacy__container_text">
            Ми залишаємо за собою право змінювати цю Політику обробки персональних даних у будь-який час. У разі змін, ми оновимо цю сторінку, і ви будете проінформовані про будь-які зміни.
          </p>
        </div>
        <div className="privacy__container">
          <p className="privacy__container_title">Контактні дані</p>
          <p className="privacy__container_text">
            Якщо у вас є питання або зауваження щодо цієї Політики обробки персональних даних, будь ласка, зв'яжіться з нами за телефоном: <a href="tel:+380961212120">+380 96 121 2120</a>.
          </p>
        </div>
      </section>
    );
  }
  