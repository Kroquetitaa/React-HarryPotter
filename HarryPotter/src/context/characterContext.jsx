import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterContextProvider = ( { children }) => {

    const [ character, setCharacter ] = useState([]);

    const peticion = async( ) => {
        const api = await axios.get('http://hp-api.herokuapp.com/api/characters');
        const data = api.json();
        setCharacter( data )
    }

    useEffect( () => {
        peticion();
    }, [])

    return (
        <CharacterContext.Provider>
            { children }
        </CharacterContext.Provider>
    )

}