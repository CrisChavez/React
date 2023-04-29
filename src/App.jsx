import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';

function App() {
  return (
    //Fragento = <> </>

    <>
      <NavBar/>
      <ItemListConteiner greeting="Hola Mundillo Pillo"/>
      <ItemCount/>
      <Vista/>
      <Mensaje/>
    </>


  );
}

export default App;
