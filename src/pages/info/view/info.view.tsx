import React from "react";
import { Box, Title4, Row, IconWarningRegular, LoadingScreen } from "@telefonica/mistica";
import { RowList, Callout, TermsAndCondition } from "../../../components";
import { infoController } from "../controller/info.controller";
import { useTranslation } from "react-i18next";

export const Info: React.FC = () => {
  const { isLoading, handlePress, handleNavigateHome } = infoController();
  const { t } = useTranslation("info");

  return (
    <Box>
      {isLoading && (
        <LoadingScreen
          title={t("loadingScreen.title")}
          description={t("loadingScreen.description")}
        />
      )}
      <Box padding={16}>
        <Title4 as="h2">{t("title")}</Title4>
      </Box>
      <RowList>
        <Row
          title={t("fisrtRow.title")}
          detail={t("fisrtRow.detail")}
          withChevron={false}
          onPress={handleNavigateHome}
        />
        <Row
          title={t("secondRow.title")}
          detail={t("secondRow.detail")}
          withChevron={false}
          onPress={handlePress}
        />
        <Row
          title={t("thirdRow.title")}
          detail={t("thirdRow.detail")}
          withChevron={false}
          onPress={handlePress}
        />
        <Row
          title={t("fourthRow.title")}
          detail={t("fourthRow.detail")}
          withChevron={false}
          onPress={handlePress}
        />
      </RowList>
      <Box paddingTop={16}>
        <Callout
          asset={<IconWarningRegular />}
          description={t("calloutDescription")}
        />
      </Box>
      <TermsAndCondition
        text={t("terms.text")}
        detail={t("terms.detail")}
        value={t("terms.value")}
        textLink={t("terms.textLink")}
        buttonText={t("terms.buttonText")}
        linkUrl="https://github.com/maur00s/desafio-b2c"
      />
    </Box>
  );
};