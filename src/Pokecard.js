import React, { Component } from 'react';

class Pokecard extends React.Component {
    render() {
        const {id, name, type, base_experience} = this.props;
        const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
        return (
            <div className="pokecard">
                <div className="pokename">{name}</div>
                <div className="pokeimg"><img src={imgUrl}></img></div>
                <div className="pokeinfo">
                    <span className="pokeinfo-label">Type: </span>
                    <span className="pokeinfo-content">{type}</span>
                </div>
                <div className="pokeinfo">
                    <span className="pokeinfo-label">EXP:</span>
                    <span className="pokeinfo-content">{base_experience}</span>
                </div>
            </div>
        )
    }
};

export default Pokecard;