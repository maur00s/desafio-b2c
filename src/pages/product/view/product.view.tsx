import React from "react";
import { Box, Title4, Row, LoadingScreen } from "@telefonica/mistica";
import { RowList } from "../../../components";
import { productController } from "../controller/product.controller";
import { useTranslation } from "react-i18next";

export const Product: React.FC = () => {
  const { isLoading, handlePress } = productController();
  const { t } = useTranslation("product");

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
          title={t("preTurbo.title")}
          description={t("preTurbo.description")}
           onPress={() => handlePress("has_score")}
        />
        <Row
          title={t("preDiario.title")}
          description={t("preDiario.description")}
           onPress={() => handlePress("has_score")}
        />
        <Row
          title={t("preTurboSecond.title")}
          description={t("preTurboSecond.description")}
          onPress={() => handlePress("has_score_false")}
        />
      </RowList>
    </Box>
  );
};
