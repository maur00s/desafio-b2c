import React from "react";
import { Box, Title4, Row, LoadingScreen } from "@telefonica/mistica";
import { RowList } from "../../../components";
import { offerController } from "../controller/offer.controller";

export const Offer: React.FC = () => {
  const { isLoading, handlePress } = offerController();

  return (
    <Box>
      {isLoading && (
        <LoadingScreen title="Aguarde um momento" description="Redirecionando para a próxima etapa..." />
      )}
      <Box padding={16}>
        <Title4 as="h2">Selecione sua oferta pra continuar</Title4>
      </Box>
      <RowList>
        <Row title="R$ 15" subtitle="+ R$ 5,99 de taxa de serviço" description="Oferta válida até 16h27" onPress={handlePress} />
        <Row title="R$ 20" subtitle="+ R$ 5,99 de taxa de serviço" description="Oferta válida até 16h27" onPress={handlePress} />
      </RowList>
    </Box>
  );
};
