import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletCoffe } from "../actions/addCoffe";
import { filterByText } from "../actions/filter";
import getFilterItems from "../selector/getFilterItems";
class CoffeRegister extends React.Component {
  state = {
    stay: false,
    counter: 10
  };
  handleDeleteCoffe = id => {
    this.props.dispatch(deletCoffe(id));
  };
  handleFilterByText = e => {
    this.props.dispatch(filterByText(e.target.value));
  };

  //here when I click on stay button I want to stay in this page
  changeStay = () => {
    this.setState({ stay: true });
  };
  componentDidMount = () => {
    const timer = setInterval(() => {
      this.setState({ counter: this.state.counter - 1 });
    }, 1000);
    if (!this.state.stay) {
      setTimeout(() => {
        clearTimeout(timer);
        if (!this.state.stay) {
          this.props.history.push("/");
        }
      }, 11000);
    }
  };

  render() {
    const { stay, counter } = this.state;
    let total = 0;
    this.props.coffe.map(({ price }) => {
      return (total += price);
    });
    return (
      <div className="col-md-10">
        <div className="Coffe-register-back stay">
          <span className="coffe-register-span">
            {!stay ? `Stay on this page  ${counter}` : undefined}
          </span>
          <button onClick={this.changeStay}>stay</button>
        </div>
        <select
          onClick={this.handleFilterByText}
          className="form-control selected_coffe"
        >
          <option defaultValue="Select all">Select all</option>
          <option>Americano</option>
          <option>Expresso</option>
          <option>Cappuccino</option>
          <option>Con panna</option>
          <option>Coffe latte</option>
          <option>Turkich coffe</option>
        </select>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th>Coffe name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Delete Coffe</th>
            </tr>
            {this.props.coffe.map((coffe, i) => {
              return (
                <tr key={i}>
                  <td>{coffe.coffeName}</td>
                  <td>{coffe.date}</td>
                  <td>{coffe.price} dh</td>
                  <td>
                    <button
                      onClick={() => this.handleDeleteCoffe(coffe.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="table table-bordered">
          <tr>
            <th>Coffe name</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>total</td>
            <td>{total} dh</td>
          </tr>
        </table>
        <div className="Coffe-register-back">
          <button>
            <Link to="/">Home page</Link>
          </button>
        </div>
      </div>
    );
  }
}

const connectedCoffeRegister = connect(state => {
  return {
    coffe: getFilterItems(state.addCoffe, state.filter)
  };
})(CoffeRegister);
export default connectedCoffeRegister;
