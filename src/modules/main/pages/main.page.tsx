import { FC } from "react";
import Hero from "../components/hero/hero.component";
import Services from "../components/services/services.component";
import Case from "../components/case/case.component";
import Certificate from "../components/certificate/certificate.component";
import Review from "../components/review/review.component";
import Cta from "../components/cta/cta.component";
import Why from "../components/whywe/why.component";
import { useScrollToHash } from "@app/common/hooks/use-scroll-to-hash";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = ({}) => {
  useScrollToHash();
  return (
    <div className="">
        <Hero />
        <Services />
        <Case />
        <Certificate />
        <Review />
        <Cta />
        <Why /> 
    </div>
  );
};
