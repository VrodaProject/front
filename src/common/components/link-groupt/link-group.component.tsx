import { useGetCategoriesQuery } from "@app/core/types";
import { CategpryLinkItem } from "../link-item/link-item.component";

export const CategpryLinkGroup = () => {
  const { data } = useGetCategoriesQuery();
  return (
    <div className="relative flex justify-center mb-12 gap-10 lg:gap-40 lg:flex-row flex-col items-center ">
      {data?.products_categories.map((category) => (
        <CategpryLinkItem url={`#${category.slug}`} key={category.id}>
          {category.title}
        </CategpryLinkItem>
      ))}
      <div className="absolute -top-5 h-36 w-0.25 bg-black hidden lg:block" />
    </div>
  );
};
