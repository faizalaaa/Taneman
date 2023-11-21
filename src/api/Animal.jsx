import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_APP_API_URL);
        setAnimals(response.data);
      } catch (error) {
        console.error("Error fetching animal data:", error);
      }
    };

    fetchAnimalData();
  }, []);

  return (
    <AnimalContext.Provider value={{ animals, setAnimals }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalContext = () => {
  const context = useContext(AnimalContext);

  return context;
};
