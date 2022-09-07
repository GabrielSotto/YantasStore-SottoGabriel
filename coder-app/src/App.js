import './app.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/itemListContainer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <CartWidget/>
    </>
  );
}

export default App;
