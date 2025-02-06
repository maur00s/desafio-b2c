import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Title4, Row, IconWarningRegular, LoadingScreen } from "@telefonica/mistica";
import { RowList, Callout } from "../../components";

export const Info: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePress = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <Box>
      {isLoading && (
        <LoadingScreen title="Aguarde um momento" description="Redirecionando para a página inicial..." />
      )}
      <Box padding={16}>
        <Title4 as="h2">Quase lá! Só falta confirmar suas informações</Title4>
      </Box>
      <RowList>
        <Row
          title="Linha"
          detail="(11) 91234-5678"
          onPress={() => navigate("/")}
        />
        <Row title="Cŕeditos" detail="R$ 20" onPress={handlePress} />
        <Row title="Taxa de serviço" detail="R$ 5,99" onPress={handlePress} />
        <Row title="Validade" detail="30 dias a partir da antecipação" onPress={handlePress} />
      </RowList>
      <Box paddingTop={16}>
        <Callout
          asset={<IconWarningRegular />}
          description="Existem R$ 15 pendentes e eles vão ser debitados desse Crédito Antecipado"
        />
      </Box>
    </Box>
  );
};
