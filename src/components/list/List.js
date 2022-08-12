
import React, {useContext} from "react";
import {NavLink} from 'react-router-dom';
import { MainContext } from "../../context/MainContext";

export const List = () => {
    const {state} = useContext(MainContext)
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    const descrHandler = (url) => {
        state.getItem(url);
        state.hideNavHandler();
    }
    return(
        <div>
            <h2>Pokemons List</h2>
            <ul>
                {Object.keys(state.pokemons).map((pokemon, index) => {
                    return(
                        <li onClick={() => {descrHandler(`${url}${index+1}`)}} key = {index}>
                            <NavLink to ={`/item/${state.pokemons[pokemon].name}`}>
                                {state.pokemons[pokemon].name}
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}