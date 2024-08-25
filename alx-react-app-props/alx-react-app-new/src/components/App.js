// App.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
      <Counter/>
    </div>
  );
}
export default App;