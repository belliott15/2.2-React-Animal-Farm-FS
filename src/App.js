import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header greeting= "Welcome to Sentient Animal Petting Zoo"/>
        <Footer email="Alchemy@alchemy.com" />
      </header>
    </div>
  );
}

export default App;
