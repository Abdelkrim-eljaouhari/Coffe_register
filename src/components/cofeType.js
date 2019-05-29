import React from "react";
class CoffeType extends React.Component {
  handleTypeChange = e => {
    this.props.handleIndexChange(e.target.textContent);
  };
  render() {
    return (
      <section className="row">
        <div className="col-md-12">
          <div onClick={this.handleTypeChange} className="coffe-types">
            <div className="coffe-types-inner-box">
              <button className="btn btn-default">
                Americano<span className="CoffeType-span">14 dh</span>
              </button>
              <button className="btn btn-default">
                Expresso<span className="CoffeType-span">12 dh</span>
              </button>
            </div>
            <div className="coffe-types-inner-box">
              <button className="btn btn-default">
                Cappuccino<span className="CoffeType-span">10 dh</span>
              </button>
              <button className="btn btn-default">
                Con pana<span className="CoffeType-span">8 dh</span>
              </button>
            </div>
            <div className="coffe-types-inner-box">
              <button className="btn btn-default">
                Coffe latte<span className="CoffeType-span">9 dh</span>
              </button>
              <button className="btn btn-default">
                Turkich coffe<span className="CoffeType-span">16 dh</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoffeType;
