import Header from './components/Nav';
import Main from './components/Main';
import './App.css'

function App() {
  return (
      <div className="app">
        <header className='app-header'>
        <Header />
        </header>

        <main className= 'app-main'>
          <Main/>
        </main>
      </div>
    
  );
};

export default App;
