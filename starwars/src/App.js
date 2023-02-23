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
    </div>
  );
}

export default App;
