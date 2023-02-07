import react, { useState, useEffect } from 'react'
import { Container } from './style'
import { Pokemonlist } from './style'
import { Pokemon } from './style'
import { Link } from 'react-router-dom'
import React from 'react'



export default function Home(){

    const [pokemon , setPokemon] = useState<any[]>([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => response.json())
        .then(data => setPokemon(data.results))
    },[])






    return(
        <Container>
            <h1>
            Pokemón
            </h1>

            <Pokemonlist>
            {
                    pokemon.map(pokemon => {
                        const pokeId = pokemon.url.split('/')
                        return (
                            <Pokemon>
                                <Link to={`/details/${pokemon.id}`}>
                                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId[6]}.svg`} alt={pokemon.name}></img>
                                </Link>
                                <span>{pokemon.name}</span>
                            </Pokemon>
                        )
                    })
                }           


            </Pokemonlist>


        </Container>
    

        
        

    )
}