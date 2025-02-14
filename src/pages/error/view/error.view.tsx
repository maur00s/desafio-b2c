import React from "react";
import { Box } from "@telefonica/mistica";
import { FeedbackScreen } from "../../../components";
import { useTranslation } from "react-i18next";
import { useErrorController } from "../controller/error.controller"; 

interface ErrorProps {
  variant: "credit" | "service";
}

export const Error: React.FC<ErrorProps> = ({ variant }) => {
  const { t } = useTranslation("error");
  const { handleRedirect,handleRedirectLink, offers } = useErrorController(variant); 

  return (
    <Box>
      <FeedbackScreen
        title={t(`${variant}.title`)}
        description={t(`${variant}.description`)}
        textButton={t(`${variant}.button`)}
        textButtonLink={t(`${variant}.buttonLink`)}
        onButtonPress={handleRedirect}
        onButtonPressLink={handleRedirectLink}
        linkUrl={variant === "service" ? "/offer" : undefined}
        textLink={variant === "service" ? t(`service.descriptionLink`) : undefined}
      />
    </Box>
  );
};
