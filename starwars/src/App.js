import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  
  return (
    <div className="App">
      <header>
      <h1>Star Wars Encyclopedia</h1>
        <Nav />
      </header>
      <body>
        <Main/>
      </body>
      <footer>
        <h5>Definitely not copyrighted 2023</h5>
      </footer>
    </div>
  );
}

export default App;
