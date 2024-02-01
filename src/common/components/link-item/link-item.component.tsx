import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface CategpryLinkItemProps {
  url: string;
  xl?: boolean;
}

export const CategpryLinkItem: FC<
  CategpryLinkItemProps & PropsWithChildren
> = ({ url, children, xl }) => {
  const linkClasess = clsx(
    "text-3xl font-light sm:w-112 w-full  border border-black  flex items-center justify-center py-3 px-20 hover:bg-darkTea hover:border-darkTea hover:text-white text-center",
    {
      "w-120": xl,
    }
  );
  return (
    <a href={url} className={linkClasess}>
      {children}
    </a>
  );
};
