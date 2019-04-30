import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Counter from "./components/clickCounter";
import Header from "./components/header";

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

function App() {
  return (
    <div className="App">
    <Header/>;
    <Counter />;
    </div>
  );
}

export default App;
