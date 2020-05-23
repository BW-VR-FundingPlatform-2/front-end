import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

//Redux Set up
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// For React Router 
import { BrowserRouter as Router } from "react-router-dom";

// App Theme for Material UI
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";


// For Redux
import rootReducer from "./store/reducers";

// State for Redux
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  rootElement
);