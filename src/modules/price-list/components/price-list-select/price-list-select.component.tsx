import { GetPriceListCategoriesQuery } from "@app/core/types";
import { FC, useEffect } from "react";
import Select, { ActionMeta } from "react-select";
import { priceListCurrent } from "../../store/price-list-state";

interface PriceListSelectProps {
  data: GetPriceListCategoriesQuery | undefined;
}

const handlerChange = (newValue: any, actionMeta: ActionMeta<unknown>) => {
  priceListCurrent(newValue?.value);
};

export const PriceListSelect: FC<PriceListSelectProps> = ({ data }) => {
  const options = [
    data?.price_list_categories?.map((item) => ({
      value: `${item.id}`,
      label: `${item.title}`,
    })) || [],
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      background: "#047065",
      color: "white",
      "&:focus": {
        borderColor: "#047065",
        boxShadow: "0 0 0 2px #047065",
      },
    }),
    option: (
      styles: any,
      { isDisabled, isFocused, isSelected, isDisbled }: any
    ) => {
      return {
        ...styles,
        "&:hover": {
          background: isDisabled
            ? styles.background
            : isSelected
            ? "#034048"
            : "#047065",
          color: isDisabled ? "#A0AEC0" : "white",
        },
        background: isSelected ? "#D3E0E1" : styles.background,
        color: isSelected ? "#034048" : "inherit",
      };
    },
    placeholder: (styles: any) => ({
      ...styles,
      color: "white",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "white",
    }),
  };

  useEffect(() => {
    if (options[0].length > 0 && priceListCurrent() === null) {
      priceListCurrent(options[0][0].value);
    }
  }, [options]);

  useEffect(() => {
    if (options[0].length > 0 && priceListCurrent() === undefined) {
      priceListCurrent(options[0][0].value);
    }
  }, [options]);

  return (
    <div>
      <Select
        options={options[0]}
        onChange={handlerChange}
        styles={colorStyles}
        defaultValue={options[0].find(
          (opt) => opt.value === priceListCurrent()
        )}
      />
    </div>
  );
};
