import { FC } from "react";

interface SlideProps {}

export const Slide: FC<SlideProps> = ({}) => {
  return (
    <div className="relative -top-12 w-full h-150 ">
      <div className="bg-[url('@app/assets/images/slide.png')] bg-no-repeat bg-cover bg-center w-full h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-7xl mb-2 text-center sm:text-left">
            КЛУБ КРАСИ VR<span className="text-darkTea">O</span>DA
          </h1>
          <h3 className="text-white text-4xl w-full sm:w-150 text-center">
            Де розкривається краса - Ваш прекрасний образ тут та зараз!
          </h3>
        </div>
      </div>
    </div>
  );
};
