import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListWidget from './components/ItemListWidget/ItemListWidget';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListWidget></ItemListWidget>
  <ItemCount stock="5" initial="1"></ItemCount>

      {/*<Item></Item>*/}
    </div>
  );
}

export default App;
