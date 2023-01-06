import React from "react";
import OnbordingPage from "./pages/onbording";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import "./index.css";

const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
        <OnbordingPage />
      </Provider>
  );
}
