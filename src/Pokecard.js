import React from 'react';

class Pokecard extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt="no img found" />
        <div className="container">
          <h4>
            <b> {this.props.name}</b>
          </h4>
          <p>{this.props.type}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
