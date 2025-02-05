import React from "react";
import {
  Box,
  Title4,
  Row,
} from "@telefonica/mistica";
import { RowList } from "../../components";

export const Product: React.FC = () => {
  return (
    <Box>
      <Box padding={16} >
       <Title4 as="h2">Selecione um produto para continuar</Title4>
      </Box>
      <RowList >
        <Row headline={false} title="Pré Turbo" description="(11) 91234-5678" onPress={() => {}} />
        <Row title="Pré Diário" description="(11) 93210-8765" onPress={() => {}} />
        <Row title="Pré Turbo" description="(11) 98756-1004" onPress={() => {}} />
      </RowList>
    </Box>
  );
};
