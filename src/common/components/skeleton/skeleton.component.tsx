import clsx from "clsx";
import { FC } from "react";

interface SkeletonProps {
  width: number;
  height: number;
  roundeFull?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({ width, height, roundeFull }) => {
  const skeletonClasses = clsx("bg-gray-200 animate-pulse", {
    "rounded-full": roundeFull,
    "rounded-md": !roundeFull,
  });
  return <div className={skeletonClasses} style={{ width, height }}></div>;
};
