import React from "react";
import { Box, Title4, Row, LoadingScreen } from "@telefonica/mistica";
import { RowList } from "../../../components";
import { offerController } from "../controller/offer.controller";
import { useTranslation } from "react-i18next";

export const Offer: React.FC = () => {
  const { isLoading, handlePress } = offerController();
  const { t } = useTranslation("offer");

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
          title={t("firstRow.title")}
          subtitle={t("firstRow.subTitle")}
          description={t("firstRow.description")}
          onPress={() => handlePress("has_peding_values")}
          />
        <Row
          title={t("secondRow.title")}
          subtitle={t("secondRow.subTitle")}
          description={t("secondRow.description")}
          onPress={() => handlePress("has_peding_values_false")}
        />
      </RowList>
    </Box>
  );
};