import { FC } from "react";
import { GoogleMapItem } from "./google-map";
import { GoogleMapMiniItem } from "./google-map-mini";

interface AboutUsProps {}

export const AboutUs: FC<AboutUsProps> = ({}) => {
  return (
    <div className="flex gap-32 justify-center flex-col lg:flex-row px-3 sm:px-0 ">
      <div className="flex flex-col gap-7 lg:w-140 p-3 lg:p-0">
        <p className="text-2xl">
          <span className="text-darkTea">Ласкаво</span> просимо до салону краси
          "Vroda" - місця, де Ваша краса розкривається у всій своїй блискучій
          грандіозності. Ми - команда експертів у сфері краси, що працює з
          цілодобовим запалом, надаючи вам індивідуальний підхід та найкращі
          рекомендації для створення ідеального образу.
        </p>
        <p className="text-2xl">
          <span className="text-darkTea">Наша</span> команда - професіонали, які
          майстерно володіють своїм ремеслом. У салоні "Vroda" Ви знайдете
          широкий спектр послуг - догляд за обличчям, тілом, апаратні методики,
          б'юті процедури та СПА релаксацію.
        </p>
        <p className="text-2xl">
          <span className="text-darkTea">Довірте</span> свою красу нашим
          експертам - і ми зробимо Вас неперевершеною, як ніколи раніше.
        </p>
      </div>
      <div className="sm:flex justify-center hidden ">
        <GoogleMapItem />
      </div>
      <div className="flex justify-center sm:hidden ">
        <GoogleMapMiniItem />
      </div>
    </div>
  );
};
