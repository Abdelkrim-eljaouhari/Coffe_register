import React from "react";
import { connect } from "react-redux";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "123",
      showBar: false
    };
  }

  changeShowBar = () => {
    if (!this.state.showBar) {
      this.setState({ showBar: true });
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { coffe } = this.props;
    if (coffe[coffe.length - 1].id !== prevState.id) {
      this.changeShowBar();
      setTimeout(
        () =>
          this.setState({
            showBar: false,
            id: coffe[coffe.length - 1].id
          }),
        3000
      );
    }
  };
  render() {
    const { coffe, color } = this.props;
    return (
      <aside className={this.state.showBar ? "showBar" : "hideBar"}>
        <p>the last item</p>
        {coffe.length > 0 && (
          <ul className="sidebar_ul" style={{ color }}>
            <li>{coffe[coffe.length - 1].coffeName}</li>
          </ul>
        )}
      </aside>
    );
  }
}

const pickColor = () => {
  let colors = ["brown", "black", "green", "#673ab7", "#dd1437"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

const Hoc = WrappedComponent => {
  return props => {
    return <WrappedComponent color={pickColor()} {...props} />;
  };
};
const mapStateToProps = state => {
  return {
    coffe: state.addCoffe
  };
};

export default connect(mapStateToProps)(Hoc(SideBar));
