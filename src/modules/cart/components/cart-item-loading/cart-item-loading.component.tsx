import { InputLoading } from "@app/common/components/input-loading/input-loading.component";
import { Skeleton } from "@app/common/components/skeleton/skeleton.component";
import { FC } from "react";

interface CartItemLoadingProps {}

export const CartItemLoading: FC<CartItemLoadingProps> = () => {
  return (
    <div className="flex border-t border-gray-200 pt-6 gap-6">
      <Skeleton width={128} height={128} roundeFull={false} />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Skeleton width={85} height={24} />
          <Skeleton width={157} height={14} />
        </div>
        <div className="flex items-end gap-6 justify-between">
          <InputLoading size="sm" />
          <Skeleton width={100} height={26} />
        </div>
      </div>
    </div>
  );
};
