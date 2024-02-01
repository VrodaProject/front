import { Services } from "@app/core/types";
import { FC } from "react";
import { ServicesItem } from "../services-item/services-item.component";

interface ServicesListProps {
  items: Services[];
  title?: string;
}

export const SerivcesList: FC<ServicesListProps> = ({ items, title }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-6xl text-darkTea font-light mb-10 ">{title}</h1>
      <div className="flex flex-wrap gap-11 justify-center  ">
        {items.map(({ image, description, category, ...services }) => (
          <ServicesItem
            image={`${image}`}
            description={description}
            category={category}
            {...services}
            key={`services-${services.id}`}
          />
        ))}
      </div>
    </div>
  );
};
