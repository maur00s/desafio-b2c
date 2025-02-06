import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const productController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePress = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/offer");
    }, 2000);
  };

  return {
    isLoading,
    handlePress,
  };
};
