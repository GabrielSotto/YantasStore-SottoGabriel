import './app.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/itemListContainer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a YantasStore"}/>
      <CartWidget/>
    </>
  );
}

export default App;
