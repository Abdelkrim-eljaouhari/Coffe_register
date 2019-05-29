import React from "react";

import Buttons from "./buttons";
class CoffeDescription extends React.Component {
  render() {
    const { index, pictures } = this.props.state;
    return (
      <div className="coffe-description col-md-5 col-xs-8">
        <div className="coffe-description-img-p">
          <div className="info">
            <img
              className="coffe-description-img"
              alt="description coffe"
              src={pictures[index].image}
            />
            <Buttons state={this.props.state} />
          </div>
          <article>{pictures[index].description}</article>
        </div>
      </div>
    );
  }
}

export default CoffeDescription;
