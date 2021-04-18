import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends React.Component {
    static defaultProps = {
        data : [
          {id: '004', name: 'Charmander', type: 'fire', base_experience: 62},
          {id: '007', name: 'Squirtle', type: 'water', base_experience: 63},
          {id: '011', name: 'Metapod', type: 'bug', base_experience: 72},
          {id: '012', name: 'Butterfree', type: 'flying', base_experience: 178},
          {id: '025', name: 'Pikachu', type: 'electric', base_experience: 112},
          {id: '039', name: 'Jigglypuff', type: 'normal', base_experience: 95},
          {id: '094', name: 'Gengar', type: 'poison', base_experience: 225},
          {id: '133', name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };

    render() {
        let team1 = [...this.props.data];
        let team2 = [];
        while (team2.length < team1.length) {
            let randomNumber = Math.floor(Math.random() * team1.length);
            let [randomMember] = team1.splice(randomNumber, 1);
            team2.push(randomMember);
        }

        let team1Exp = team1.reduce((sum, item) => sum + item.base_experience, 0);
        let team2Exp = team2.reduce((sum, item) => sum + item.base_experience, 0);

        return (
            <div>
                <Pokedex 
                pokemons = {team1}
                exp = {team1Exp}
                isWinner = {team1Exp > team2Exp}
                />
                <Pokedex 
                pokemons = {team2}
                exp = {team2Exp}
                isWinner = {team2Exp > team1Exp}
                />
            </div>
        )
    }
}

export default Pokegame;