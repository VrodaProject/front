import { FC, PropsWithChildren } from "react";

interface FooterLinkProps {
  href: string;
  icon?: any;
}

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({
  href,
  children,
  icon,
}) => {
  return (
    <li>
      <a href={href} className="flex gap-2 items-center hover:text-gray-300">
        {icon && icon}
        {children}
      </a>
    </li>
  );
};
