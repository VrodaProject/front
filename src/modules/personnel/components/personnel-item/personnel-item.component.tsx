import { Button } from "@app/common/components/button/button.component";
import { useCloudinaryImage } from "@app/common/hooks/use-cloudinary-image.hook";
import { AdvancedImage } from "@cloudinary/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PersonnelItemProps {
  image: string;
  name: string;
  description: string | null;
  fitImage?: boolean;
  category: string | undefined;
}

export const PersonnelItem: FC<PersonnelItemProps> = ({
  image,
  name,
  description,
  category,
  fitImage = true,
}) => {
  console.log(category);
  const transformations = ["w_395", "h_593"];
  if (fitImage) {
    transformations.unshift("c_pad");
  }

  const imageCld = useCloudinaryImage(image, transformations);

  return (
    <div className="flex gap-10 flex-col lg:flex-row items-center lg:items-start shadow-xl rounded-2xl bg-white lg:bg-none lg:shadow-none p-3 lg:p-0  ">
      <AdvancedImage
        cldImg={imageCld}
        width={395}
        height={593}
        className="rounded-t-2xl"
      />

      <div className="flex flex-col gap-12 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-light">{name}</h1>
          <p className="text-2xl text-gray-600">{category}</p>
        </div>
        <p className="w-full sm:w-120 md:w-140 text-2xl">{description}</p>
        <div className="relative w-64 h-full mb-16">
          <div className="">
            <Link to="/price-list">
              <Button size="base">Ознайомитись із послугами</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
