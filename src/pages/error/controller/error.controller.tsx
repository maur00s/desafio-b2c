import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useErrorController = (variant: "credit" | "service") => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState<any[]>([]);

  const handleRedirect = () => {
    if (variant === "credit") {
      navigate("/"); 
    } else{
        navigate("/info")
    }
  };

  const handleRedirectLink = () => {
    if (variant !== "credit") {
      navigate("/"); 
    } else{
        navigate("/info")
    }
  };
  

  const fetchOffers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/offers");
      setOffers(response.data); 
      console.log("Ofertas:", response.data); 
    } catch (error) {
      console.error("Erro ao buscar ofertas", error);
    }
  };

  useEffect(() => {
    if (variant === "service") {
      fetchOffers(); 
    }
  }, [variant]);

  return {
    offers, 
    handleRedirect,
    handleRedirectLink,
  };
};
