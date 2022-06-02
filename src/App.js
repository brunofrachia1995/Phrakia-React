import './App.css';
import ItemListContainer from './components/ItemListContainer';
import MuiNavbar from './components/MuiNavBar';



function App() {
  return (
    <>
    <MuiNavbar />
    <ItemListContainer bienvenida={'Bienvenidos a PHRAKIA, empecemos a hacer fotografías y dejar de sacar fotos'} />

    </>
  );
}

export default App;
