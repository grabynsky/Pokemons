import React, {useContext} from 'react';
import './home.scss';
import { MainContext } from '../../context/MainContext';
import {Link} from 'react-router-dom';
import {Card} from '../card/Card'

export const Home = () => {
    const {state} = useContext(MainContext);
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    return(
        <div className='home'>
            {
                Object.keys(state.pokemons).map((pokemon, index) => {
                    return(
                        <Link to = {`/item/${state.pokemons[pokemon].name}`} key = {index}>
                        <Card
                            name = {state.pokemons[pokemon].name}
                            img = {state.images[state.pokemons[pokemon].name]}
                            click = {state.getItem}
                            arg = {`${url}${index + 1}`}
                        />
                        </Link>
                    )
                })
            }
        </div>
    )
}