import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home/homePage.js';
import {NewTodoPage} from './new/NewTodoPage.js';
import { EditTodoPage} from './edit/EditTodoPage.js';


function App() {
 return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="new" element={<NewTodoPage/>}/>
      <Route path="/edit/:id" element={<EditTodoPage/>}/>
      <Route path="*" element={<p>Not found</p>}/>
    </Routes>
  </HashRouter>

 );
}

export {App};
