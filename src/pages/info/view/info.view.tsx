import React from "react";
import { Box, Title4, Row, IconWarningRegular, LoadingScreen } from "@telefonica/mistica";
import { RowList, Callout, TermsAndCondition } from "../../../components";
import { infoController } from "../controller/info.controller";

export const Info: React.FC = () => {
  const { isLoading, handlePress, handleNavigateHome } = infoController();

  return (
    <Box>
      {isLoading && (
        <LoadingScreen
          title="Aguarde um momento"
          description="Redirecionando para a página inicial..."
        />
      )}
      <Box padding={16}>
        <Title4 as="h2">Quase lá! Só falta confirmar suas informações</Title4>
      </Box>
      <RowList>
        <Row
          title="Linha"
          withChevron={false}
          detail="(11) 91234-5678"
          onPress={handleNavigateHome}
        />
        <Row
          withChevron={false}
          title="Créditos"
          detail="R$ 20"
          onPress={handlePress}
        />
        <Row
          withChevron={false}
          title="Taxa de serviço"
          detail="R$ 5,99"
          onPress={handlePress}
        />
        <Row
          withChevron={false}
          title="Validade"
          detail="30 dias a partir da antecipação"
          onPress={handlePress}
        />
      </RowList>
      <Box paddingTop={16}>
        <Callout
          asset={<IconWarningRegular />}
          description="Existem R$ 15 pendentes e eles vão ser debitados desse Crédito Antecipado"
        />
      </Box>
      <TermsAndCondition
        text="Ao confirmar, você aceita os "
        textLink="termos e condições"
        linkUrl="https://github.com/maur00s/desafio-b2c"
      />
    </Box>
  );
};