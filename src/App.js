import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './components/header/Header'
import { Route, Redirect } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer';
import FavoritesContainer from './components/favorites/FavoritesContainer';
function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path='/' render={() => <Redirect to='/search' />} />
      <Route exact path='/search' render={() => <Layout><ContentContainer /></Layout>
      } />
      <Route exact path='/favorites' render={() => <Layout><FavoritesContainer /></Layout>
      } />



    </div>
  );
}

export default App;
