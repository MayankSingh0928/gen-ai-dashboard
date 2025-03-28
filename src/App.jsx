import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import QueryResults from "./components/QueryResults";
import "./index.css"

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Gen AI Analytics Dashboard</h1>
        <QueryInput />
        <QueryHistory />
        <QueryResults />
      </div>
    </Provider>
  );
};

export default App;
