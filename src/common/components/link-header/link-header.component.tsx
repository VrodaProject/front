import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface HeaderLinkItemProps {
  url: string;
}

export const LinkHeader: FC<HeaderLinkItemProps & PropsWithChildren> = ({
  url,
  children,
}) => {
  return (
    <Link
      to={url}
      className="text-2xl font-normal flex items-center justify-center text-lightBlue   hover:text-white text-center"
    >
      {children}
    </Link>
  );
};
