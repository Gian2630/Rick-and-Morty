import React, {useEffect, useState} from 'react'
import { useLocation} from "wouter"

export const ListCharacters = ({character}) => {
  const [, navigate] = useLocation();

  const handleClick = () => {
    navigate(`/Character/${character.id}`);

}

const getStatusText = () => {
  switch (character.status) {
    case "unknown":
      return "Desconocido";
    case "Alive":
      return "Vivo";
    case "Dead":
      return "Muerto";
    default:
      return character.status;
  }
};

const getSpeciesText = () => {
  return character.species === "Human" ? "Humano" : character.species;
};

  return (
    <div className="Character-box" key={character.id} onClick={handleClick}>
        <img className="Character-image" src={character.image} alt={character} />
        <h1 className='Character-name'>-Nombre: {character.name}</h1>
        <h2 className='Character-status'>-Estado: {getStatusText()}</h2>
        <h2 className='Character-species'>-Especie: {getSpeciesText()}</h2>
    </div>
);
}

