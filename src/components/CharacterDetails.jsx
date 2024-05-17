
import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter"
import { getCharacterDetails } from "../services/posts";

export const CharacterDetails = () => {
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
        <div className="Character-container">
            <div className="Character-info">
                <div className="Character-image">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="Character-details">
                    <h1>{character.name}</h1>
                    <h2>Estado: {character.status}</h2>
                    <h2>Especie: {character.species}</h2>
                    <h2>Género: {character.gender}</h2>
                    <h2>Lugar de origen: {character.origin.name}</h2>
                    <h2>Ubicación: {character.location.name}</h2>
                </div>
            </div>
        </div>
    ) : null;
};