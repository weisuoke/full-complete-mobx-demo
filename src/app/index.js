import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { observer, inject, Provider } from "mobx-react";


class Store {
  @observable number = 0;

  @action addNumber = () => (this.number += 1);
}

@inject("store")
@observer
class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Fragment>
        <div>Mobx ManageMent Demo, {store.number}</div>
        <button onClick={() => store.addNumber()}>+</button>
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={new Store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
