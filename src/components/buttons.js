import React from "react";
import { connect } from "react-redux";
import { addCoffe } from "../actions/addCoffe";
import moment from "moment";

class Buttons extends React.Component {
  render() {
    const { index } = this.props.state;
    const { name, price } = this.props.state.pictures[index];
    const { dispatch } = this.props;
    return (
      <>
        <button
          onClick={() => {
            const now = moment().format("YYYY/MMM/d HH:mm");
            dispatch(
              addCoffe({ coffeName: name, date: now, price, bool: true })
            );
          }}
          className="btn btn-success want-it"
        >
          I want it
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffe: state.addCoffe
  };
};
export default connect(mapStateToProps)(Buttons);
