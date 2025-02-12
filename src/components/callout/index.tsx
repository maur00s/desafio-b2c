import React from "react";
import { Callout as MisticaCallout } from "@telefonica/mistica";

interface CalloutProps {
  description?: string | any;
  asset?: string | any;
}

export const Callout: React.FC<CalloutProps> = ({ description, asset }) => {
  return <MisticaCallout asset={asset} description={description} />;
};