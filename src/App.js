import './App.css';
import Contenido from './components/Contenido/Contenido';

function App() {
  return (
    
    <div className="App">
    <div className='banner'></div> 
      <div>
          <h1 className='Title'>DEMO</h1>
      </div>
      <div>
          <Contenido />
      </div>
      <div>
         <img src="https://mystickermania.com/cdn/stickers/anime/spy-family-anya-peace-512x512.png" alt="" width="100px" height="100px"></img>
      </div>
    </div>
  );
}

export default App;
