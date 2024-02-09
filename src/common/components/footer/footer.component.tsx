import { ReactComponent as Logotype } from "@app/assets/images/logo.svg";
import { ReactComponent as AccessTimeIcon } from "@app/assets/icons/access_time.svg";
import { ReactComponent as SmartPhoneIcon } from "@app/assets/icons/smartphone.svg";
import { ReactComponent as LocalPhoneIcon } from "@app/assets/icons/local_phone.svg";
import { ReactComponent as InstagramIcon } from "@app/assets/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "@app/assets/icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "@app/assets/icons/telegram.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-darkTea px-5 py-10 flex flex-col items-center mt-12 md:px-1">
      <Logotype width={216} hanging={71} className="mb-5" />

      <div className="text-white text-xl font-normal flex flex-col gap-8 sm:flex-row md:gap-36 flex-wrap ">
        <ul className="flex flex-col gap-3">
          <li className="hover:text-gray-300">
            <Link to="/">Головна</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/services">Послуги</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/products">Товари</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="hover:text-gray-300">
            <Link to="/login">Вхід</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/personnel">Персонал</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/price-list">Прайс лист</Link>{" "}
          </li>
        </ul>

        <ul className="flex flex-col gap-8 md:gap-3">
          <li className="flex gap-2 hover:text-gray-300 items-center">
            <AccessTimeIcon width={31} hanging={31} />
            ПН-НД: 9:00-20:00
          </li>
          <li className="flex gap-2 hover:text-gray-300 items-center">
            <SmartPhoneIcon width={31} hanging={31} />
            +380961212120
          </li>
        </ul>
      </div>

      <ul className="flex gap-6 justify-center md:justify-end mt-8">
        <li>
          <a href="https://www.instagram.com/vroda_club_estetic/">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <a href="https://t.me/+380961212120">
            <TelegramIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};
