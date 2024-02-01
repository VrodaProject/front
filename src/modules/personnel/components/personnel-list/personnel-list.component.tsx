import { Personnel } from "@app/core/types";
import { FC } from "react";
import { PersonnelItem } from "../personnel-item/personnel-item.component";

interface PersonnelListProps {
  items: Personnel[];
  title?: string;
}

export const PersonnelList: FC<PersonnelListProps> = ({ items, title }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-6xl text-darkTea font-light mb-10 ">{title}</h1>
      <div className="flex flex-wrap gap-11 justify-center  ">
        {items.map(({ image, description, ...personnel }) => (
          <PersonnelItem
            image={`${image}`}
            description={description}
            category={personnel.personnel_category?.title}
            {...personnel}
            key={`product-${personnel.id}`}
          />
        ))}
      </div>
    </div>
  );
};
