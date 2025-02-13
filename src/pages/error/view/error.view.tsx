import React from "react";
import { Box } from "@telefonica/mistica";
import { FeedbackScreen } from "../../../components";
import { useTranslation } from "react-i18next";

interface ErrorProps {
  variant: "credit" | "service";
}

export const Error: React.FC<ErrorProps> = ({ variant }) => {
  const { t } = useTranslation("error"); 

  return (
    <Box>
      <FeedbackScreen
        title={t(`${variant}.title`)}
        description={t(`${variant}.description`)}
        textButton={t(`${variant}.button`)}
        textButtonLink={t(`${variant}.buttonLink`)}
        textLink={variant === "service" ? t(`service.descriptionLink`) : undefined}
      />
    </Box>
  );
};
