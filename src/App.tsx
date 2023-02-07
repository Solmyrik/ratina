import React from 'react';
import Header from './pages/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './pages/Footer/Footer';
import Table from './pages/Table/Table';
import Chair from './pages/Chair/Chair';
import Favorite from './pages/Favorite/Favorite';
import Tile from './pages/Tile/Tile';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/chair" element={<Chair />}></Route>
          <Route path="/tile" element={<Tile />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
