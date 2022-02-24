import { useEffect, useState } from "react"
import AxiosClient from '../axios/AxiosClient';

export const PokeService = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const GetPokemonsByOrder = async () => {
            try {
                const { data } = await AxiosClient.get(` https://pokeapi.co/api/v2/pokemon/?limit=1126`);

                setPokemons(
                    data.results.map((pokemon, idx) => {
                        return {
                            ...pokemon,
                            id: idx + 1
                        }
                    })
                );
            } catch (error) {

                console.log(error);
                return;

            }
        }
        if (pokemons.length === 0) {
            GetPokemonsByOrder();
        }
    }, [pokemons])

    return {
        pokemons
    };
}
export const GetPokemonBySearch = () => {
    const [resultPoke, setResultPoke] = useState({});
    
    const [search, setSearch] = useState('');

    const [useApi, setUseApi] = useState(false);

    const [savedPokemons, setSavedPokemons] = useState([]);
    useEffect(() => {
        const getPokeById = async() => {
            try {
                const { data } = await AxiosClient.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
    
                setResultPoke(data);
                setSavedPokemons([data, ...savedPokemons]);
            } catch (error) {
                return;
            }
        }
        if(useApi){
            getPokeById();
        }
    },[search, useApi])
    return {search, setSearch, setUseApi, resultPoke, savedPokemons};
}