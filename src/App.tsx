import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<h1>Hellowold</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
