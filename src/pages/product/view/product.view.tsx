import React from "react";
import { Box, Title4, Row, LoadingScreen } from "@telefonica/mistica";
import { RowList } from "../../../components";
import { productController } from "../controller/product.controller";

export const Product: React.FC = () => {
  const { isLoading, handlePress } = productController();

  return (
    <Box>
      {isLoading && (
        <LoadingScreen title="Aguarde um momento" description="Redirecionando para a próxima etapa..." />
      )}
      <Box padding={16}>
        <Title4 as="h2">Selecione um produto para continuar</Title4>
      </Box>
      <RowList>
        <Row headline={false} title="Pré Turbo" description="(11) 91234-5678" onPress={handlePress} />
        <Row title="Pré Diário" description="(11) 93210-8765" onPress={handlePress} />
        <Row title="Pré Turbo" description="(11) 98756-1004" onPress={handlePress} />
      </RowList>
    </Box>
  );
};
