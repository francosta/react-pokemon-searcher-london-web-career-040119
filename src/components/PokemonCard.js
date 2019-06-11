import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      side: true
    };
  }

  toggleState = () => {
    this.setState({ side: !this.state.side });
  };

  render() {
    const hp = this.props.pokemon["stats"].find(stat => stat.name === "hp")
      .value;
    return (
      <Card>
        <div onClick={this.toggleState}>
          <div className="image">
            {this.state.side ? (
              <img alt="oh no!" src={this.props.pokemon["sprites"]["front"]} />
            ) : (
              <img alt="oh no!" src={this.props.pokemon["sprites"]["back"]} />
            )}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon["name"]}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
