import React from 'react';
import { useState } from 'react';

function App() {
  const [scaffolding, setScaffolding] = useState('React+Redux+useState');

  return (
      <div className="flex-center position-ref full-height">
        <div className="content">
          <div className="title m-b-md">
            It's Laravel in Docker with {scaffolding}!
          </div>
          <div>
            <button onClick={() => setScaffolding(scaffolding + "+Interaction")}>
              Click me!
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;