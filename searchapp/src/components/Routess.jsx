import React from 'react';

import  {Navigate, Route, Routes} from 'react-router-dom';

import { Results } from './Results';

export const Routess = () => (
  <div className="p-4">
    <Routes>
      <Route exact path="/">
        {/* <Navigate to="/search" /> */}
      </Route>
      <Route exact path="/search" element={Results}>
      </Route>
      <Route path="/images" element={Results}>
      </Route>
      <Route path="/news" element={Results}>
      </Route>
      <Route path="/videos" element={Results}>
      </Route>
    </Routes>
  </div>

);
