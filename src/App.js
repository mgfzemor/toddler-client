import React from 'react';
import './App.css';
import ContentList from './ContentList/ContentList'
import Typography from "@material-ui/core/Typography"
import Header from './Header/Header'
import Body from './Body/Body'

function App() {
  return (
    <div className="App">
    <Header/>
    <Body/>
    </div>
  );
}

export default App;
