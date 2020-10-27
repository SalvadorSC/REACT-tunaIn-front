import logo from "./logo.svg";
import "./App.css";
import FormRegistro from "./FormRegistro";

function App() {
  const openModal = () => {
    console.log("open modal");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={openModal}>Regístrarte</button>
        <FormRegistro />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
