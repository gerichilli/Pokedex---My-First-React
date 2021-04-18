import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                <div className="pokedex-header">
                    <h2>{this.props.isWinner ? 'Winner' : 'Loser'}</h2>
                    <h3>Total experience: {this.props.exp}</h3>
                </div>
               
                {this.props.pokemons.map((item, index) =>
                    <Pokecard id = {item.id}
                    name = {item.name}
                    type = {item.type}
                    base_experience = {item.base_experience}
                    key= {index}
                    />
                )}
            </div>
        )
    }
}

export default Pokedex;