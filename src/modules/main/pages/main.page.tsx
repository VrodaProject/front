import { FC } from "react";
import { Slide } from "../components/slide/slide.component";
import { AdvantagesGroup } from "../components/advantages/advantages-group/advantages-group.component";
import { AboutUs } from "../components/about-us/about-us.component";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = ({}) => {
  return (
    <div className="">
      <Slide />
      <AdvantagesGroup />
      <AboutUs />
    </div>
  );
};
