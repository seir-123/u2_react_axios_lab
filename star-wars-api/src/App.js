import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <main>
        <Main/>
      </main>
    </div>
  );
}

export default App;
