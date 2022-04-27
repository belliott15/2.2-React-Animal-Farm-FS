
import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header greeting= "Welcome to Self Aware Animal Petting Zoo"/>
      </header>
      <Main animals={ animals }/>
      <footer className='App-footer'>
        <Footer email="AnimalTherapist@theyarerioting.com" />
      </footer>
    </div>
  );
}

export default App;
