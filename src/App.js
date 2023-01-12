import React from 'react';
import { BrowserRouter, Route, NavLink,Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './adherantcomponent/CreatePost';
import AdherantList from './adherantcomponent/ListA';
import CreatePoste from './livrecomponent/CreatePost';
import DeletePost from './adherantcomponent/deletelist';
import LivreList from './livrecomponent/Listlivre'
import BasicExample from './navbar/navbar';
import DeletePoste from './livrecomponent/deletelist';

const App = () => {
    return (
        <BrowserRouter>
      
      <BasicExample></BasicExample>
           
            <div className="container">
                <br />
                <Routes>
                <Route path="/create" exact element={<CreatePost/>}></Route>
                <Route path="/adherents" exact element={<AdherantList/>}></Route>
                <Route path ="/livre" exact element={<LivreList/>}></Route>
                <Route path ="/createl" exact element={<CreatePoste/>}></Route>
         
                <Route path="/deleteAD/:id" exact element={<DeletePost/>}></Route>
                <Route path="/deleteLI/:id" exact element={<DeletePoste/>}></Route>
                <Route path="/createad" exact element={<CreatePost/>}></Route>
         
            </Routes>
  </div>
        </BrowserRouter>
    );
}

export default App;