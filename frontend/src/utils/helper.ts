import { COLOR_PALETTE } from "@/constants/color";

export const getColorByIndex = (index: number) => {
  return COLOR_PALETTE[index % COLOR_PALETTE.length];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmptyValue = (variable: any): boolean => {
  return variable === undefined || variable === null || variable === "";
};