import React from "react";
import { render } from "react-dom";
import Test from "testApp.components/Test";
import { store } from "testApp.config/configureStore";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById("app")
);
