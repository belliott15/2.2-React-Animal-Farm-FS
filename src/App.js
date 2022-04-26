
import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header greeting= "Welcome to Sentient Animal Petting Zoo"/>
        <Main animals={ animals }/>
        <Footer email="Alchemy@alchemy.com" />
      </header>
    </div>
  );
}

export default App;
