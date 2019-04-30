import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Counter from "./components/clickCounter";
import Header from "./components/header";


function App() {
  return (
    <div className="App">
    <Header/>;
    <Counter />;
    </div>
  );
}

export default App;
