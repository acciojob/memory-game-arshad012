
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <h1>Welcome!</h1>
      <input type='radio' id='easy' />
      <input type='radio' id='normal' />
      <input type='radio' id='hard' />
  
      <button>Start</button>
  
      <div className='cells_container'>levels_container</div>
      <div className='cells_container'>cells_container</div>
    </div>
  )
}

export default App
