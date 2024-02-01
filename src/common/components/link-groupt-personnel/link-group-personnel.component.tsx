import { useGetPersonnelCategoriesQuery } from "@app/core/types";
import { CategpryLinkItem } from "../link-item/link-item.component";

export const CategpryLinkGroupPersonnel = () => {
  const { data } = useGetPersonnelCategoriesQuery();
  return (
    <div className="relative flex justify-center mb-12 gap-10 lg:gap-40 lg:flex-row flex-col items-center ">
      {data?.personnel_categories.map((category) => (
        <CategpryLinkItem url={`#${category.slug}`} key={category.id} xl={true}>
          {category.title}
        </CategpryLinkItem>
      ))}
      <div className="absolute -top-5 h-36 w-0.25 bg-black hidden lg:block" />
    </div>
  );
};
