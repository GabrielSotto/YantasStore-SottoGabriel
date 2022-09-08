import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
// import ItemListContainer from './container/itemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
      
    </>
  );
}

export default App;
