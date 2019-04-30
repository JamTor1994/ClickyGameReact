import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Counter from "./components/clickCounter";



function App() {
  return (
    <div className="App">
    <div>Header</div>
      <div>
         <Counter />;
      </div>
     
      <div>
        Footer
      </div>

    </div>
  );
}

export default App;
