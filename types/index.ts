import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: 'button' | 'submit';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchBarProps {
  setManufacturer: (setManufacturer: string) => void;
  setModel: (setModel: string) => void;
}

export interface SearchmanufacturerProps {
  selected: string;
  setSelected: (setSearchManufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manfacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: ((setFuel: string) => void) | ((setYear: number) => void);
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (setLimit: number) => void;
}
