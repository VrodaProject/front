import { Personnel_Categories } from "@app/core/types";
import { FC } from "react";
import { PersonnelList } from "../personnel-list/personnel-list.component";

interface PersonnelCategoryProps {
  data: any;
}

export const PersonnelCategory: FC<PersonnelCategoryProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-12 " id={data.slug}>
      <div className="flex flex-col gap-1 items-center">
        <h2 className="relative after:content-[''] after:block after:absolute after:w-full text-2xl after:h-1 font-bold  after:bg-darkTea">
          {data.title}
        </h2>
      </div>

      <PersonnelList items={data.personnel_items} />
    </div>
  );
};
