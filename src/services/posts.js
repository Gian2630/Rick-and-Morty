import axios from "axios";


const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
  });

  
   export const getAllCharacters = async () => {
        const response = await instance.get('/character');
        return response.data.results;
      };

   export const getCharacterDetails = async (id) => {
        const response = await instance.get(`/character/${id}`);
        return response.data;        
      };   
    
      

