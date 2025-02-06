import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const infoController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePress = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return {
    isLoading,
    handlePress,
    handleNavigateHome,
  };
};
