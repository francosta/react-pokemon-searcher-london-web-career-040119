import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      filteredPokemons: []
    };
  }

  getPokemons = url => {
    return fetch(url).then(resp => resp.json());
  };

  filterPokemons = string => {
    this.setState({
      filteredPokemons: this.state.pokemons.filter(pokemon =>
        pokemon.name.includes(string)
      )
    });
  };

  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] });
    this.setState({ filteredPokemons: this.state.pokemons });
  };

  componentDidMount() {
    this.getPokemons("http://localhost:3000/pokemon").then(resp => {
      this.setState({ pokemons: resp });
      this.setState({ filteredPokemons: resp });
    });
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          // onSearchChange={_.debounce(() => console.log("🤔"), 500)}
          onSearchChange={(e, data) => this.filterPokemons(data.value)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemons} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
