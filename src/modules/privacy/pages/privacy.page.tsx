import { useEffect } from "react";

export default function Privacy() {
       useEffect(() => {
            window.scrollTo(0, 0); 
          }, []);
  return (
    <section className="privacy">
        <h1 className="privacy__title">Політика конфіденційності</h1>
        <div className="privacy__container">
        <p className="privacy__container_text">Салон краси Vroda (далі — «Салон») піклується про конфіденційність ваших персональних даних та захищає вашу інформацію. У цій Політиці конфіденційності пояснюється, які дані ми збираємо, як їх обробляємо, зберігаємо та захищаємо.</p>
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
            <p className="privacy__container_title">Які дані ми збираємо?</p>
            <p className="privacy__container_text">Ми збираємо тільки ті персональні дані, які необхідні для надання послуг і взаємодії з вами. Це можуть бути:</p>
            <ul>
                <li>Ім’я та прізвище</li>
                <li>Номер телефону</li>
                <li>Інформація про послугу, яку ви забронювали</li>
            </ul>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Як ми використовуємо ваші дані?</p>
            <p className="privacy__container_text">Ваші персональні дані використовуються для наступних цілей:</p>
            <ul>
                <li>Обробка та підтвердження бронювання послуг</li>
                <li>Комунікація з вами щодо вашої запису на послугу</li>
                <li>Відправка важливих повідомлень про зміни в обслуговуванні</li>
            </ul>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Як ми захищаємо ваші дані?</p>
            <p className="privacy__container_text">Ми вживаємо необхідних технічних та організаційних заходів для забезпечення безпеки ваших даних. Всі персональні дані, які ви надаєте через наш вебсайт, передаються за допомогою захищених каналів зв'язку, що виключає можливість їх несанкціонованого доступу.</p>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Чи передаємо ми ваші дані третім особам?</p>
            <p className="privacy__container_text">На даний момент ми не передаємо ваші персональні дані третім особам. Всі дані використовуються тільки для внутрішніх потреб салону краси Vroda.</p>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Зберігання даних</p>
            <p className="privacy__container_text">Ми зберігаємо ваші персональні дані протягом часу, необхідного для надання послуг. Після виконання послуги або скасування бронювання ваші дані видаляються з нашої системи.</p>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Ваші права щодо персональних даних</p>
            <p className="privacy__container_text">Ви маєте право на:</p>
            <ul>
                <li>Доступ до своїх персональних даних</li>
                <li>Виправлення або оновлення своїх даних</li>
                <li>Видалення своїх даних</li>
                <li>Обмеження обробки ваших даних</li>
                <li>Переносимість даних</li>
            </ul>
            <p className="privacy__container_text">Для реалізації своїх прав, будь ласка, звертайтесь до нас за телефоном: +380 96 121 2120.</p>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Використання cookies</p>
            <p className="privacy__container_text">Наш вебсайт може використовувати cookies для покращення взаємодії з користувачем та збору статистичних даних. Використання cookies є стандартною практикою для багатьох вебсайтів і не завдає шкоди вашій конфіденційності. Ви можете налаштувати свій браузер для відмови від cookies, але це може вплинути на функціональність нашого вебсайту.</p>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Зміни в політиці конфіденційності</p>
            <p className="privacy__container_text">Ми залишаємо за собою право змінювати цю Політику конфіденційності в будь-який час. У разі змін, ми оновимо цю сторінку, і ви будете проінформовані про будь-які зміни в політиці.</p>
        </div>
        <div className="privacy__container">
            <p className="privacy__container_title">Контактні дані</p>
            <p className="privacy__container_text">Якщо у вас є питання або зауваження щодо цієї Політики конфіденційності або обробки ваших персональних даних, будь ласка, зв'яжіться з нами за телефоном: <a href="tel:+380961212120">+380 96 121 2120</a>.</p>
        </div>
    </section>
  )
}
