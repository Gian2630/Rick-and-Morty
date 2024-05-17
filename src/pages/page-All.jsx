import { useEffect, useState } from "react";
import { getAllCharacters } from "../services/posts";
import { ListCharacters } from "../components/ListCharacters";

export const CharactersListPage = () => {
    const [character, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters().then((data) => {
            setCharacters(data);
        });
    }, []);

    return (
        <>
            <section className="Characters-container">
                {character.map((character) => (
                    <ListCharacters key={character.id} character={character} />
                ))}
            </section>
        </>
    );
}