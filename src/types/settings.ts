import { ReactNode } from "react";

export interface Setting {
  id: number;
  name: string;
  toggle?: boolean;
  icon?: ReactNode;
  colors?: boolean;
  slider?: boolean;
  button?: boolean;
}
