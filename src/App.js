import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListWidget from './components/ItemListWidget';
import ItemCount from './components/ItemCount';

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListWidget></ItemListWidget>
      <ItemCount stock="5" initial="1"></ItemCount>
    </div>
  );
}

export default App;
