import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import MuiNavbar from './components/MuiNavBar';





function App() {

  const onAdd = (count) => {

    alert(count);

  }

  return (

    <>
    <MuiNavbar />
    <ItemListContainer bienvenida={'Bienvenidos a PHRAKIA, empecemos a hacer fotografías y dejar de sacar fotos'} />
    {/* <ItemCount inicial={1} max={10} onAdd={onAdd} /> */}
    </>
  );
} 

export default App;
