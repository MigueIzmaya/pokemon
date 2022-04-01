import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListWidget from './components/ItemListWidget';

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListWidget></ItemListWidget>
    </div>
  );
}

export default App;
