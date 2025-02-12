import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const offerController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePress = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/error-service");
    }, 2000);
  };

  const handleNextPage = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/info");
    }, 2000);
  };


  return {
    isLoading,
    handlePress,
    handleNextPage
  };
};
