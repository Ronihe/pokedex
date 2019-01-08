import React from 'react';

class Pokecard extends React.Component {
  render() {
    return (
      <div class="card">
        <div> {this.props.name}</div>
        <img src={this.props.image} alt="no img found" />
        <div>{this.props.type}</div>
      </div>
    );
  }
}

export default Pokecard;
