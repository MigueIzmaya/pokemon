import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemDetailsContainer></ItemDetailsContainer>
    </div>
  );
}

export default App;
