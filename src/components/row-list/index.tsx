import React from "react";
import { RowList as MisticaRowList } from "@telefonica/mistica";

export const RowList = ({ children }: React.PropsWithChildren<{}>) => {
  return <MisticaRowList> {children}</MisticaRowList>;
};

