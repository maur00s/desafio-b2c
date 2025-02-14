import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type ScoreType = "has_score" | "has_score_false";

export const productController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePress = async (scoreType: ScoreType) => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await axios.get('http://localhost:3000/score');
        console.log(`Resposta do /score (${scoreType}):`, response.data);

        const scoreValue = response.data[scoreType];

        if (scoreValue) {
          console.log(`${scoreType} é true, redirecionando para /offer`);
          navigate("/offer");
        } else {
          console.log(`${scoreType} é false, redirecionando para /error-service`);
          navigate("/error-credit");
        }
      } catch (error) {
        console.error("Erro ao buscar /score", error);
        navigate("/error-credit");
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