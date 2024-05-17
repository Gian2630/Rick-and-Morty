import { CharacterDetails } from "../components/CharacterDetails";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter"
import { getCharacterDetails } from "../services/posts";

export const DetailsPage = () => {
    const { id } = useParams();
    const [_, navigate] = useLocation();
    const [character, setCharacter] = useState(null);;

    useEffect(() => {
       
          getCharacterDetails(id)
            .then(data => {
                if (data) {
                    setCharacter(data);
                } else {
                    navigate("/page-404");
                }
            })
            .catch(error => {
                console.error("Error al obtener los detalles del personaje:", error);
                navigate("/page-404");
            });
    }, [id, navigate]);

    return character ? (
        <div className="Character-info">
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
        </div>
    ) : null;
};