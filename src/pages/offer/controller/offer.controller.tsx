import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type PendingValuesType = "has_peding_values" | "has_peding_values_false";

export const offerController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePress = async (pendingValuesType: PendingValuesType) => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await axios.get('http://localhost:3000/pending-values');
        console.log(`Resposta do /pending-values (${pendingValuesType}):`, response.data);

        const pendingValues = response.data[pendingValuesType];

        if (pendingValues) {
          console.log(`${pendingValuesType} é true, redirecionando para /info`);
          navigate("/info");
        } else {
          console.log(`${pendingValuesType} é false, redirecionando para /error-service`);
          navigate("/error-service");
        }
      } catch (error) {
        console.error("Erro ao buscar /pending-values", error);
        navigate("/error-service");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return {
    isLoading,
    handlePress,
  };
};
