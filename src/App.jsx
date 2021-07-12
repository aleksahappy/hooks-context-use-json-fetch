import './App.css';
import Component from './components/Component';

function App() {
  return (
    <div className="App">
      <Component endpoint="data"/>
      <Component endpoint="error"/>
      <Component endpoint="loading"/>
    </div>
  );
}

export default App;
