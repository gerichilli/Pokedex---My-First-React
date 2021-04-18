import Pokegame from './Pokegame';

function App() {
  return (
    <div className="container">
      <h1>
        Pokedex 
        <svg className="icon">
          <use xlinkHref='./icons.svg#pokecoin'></use>
        </svg>
      </h1>
      <Pokegame />
    </div>
  );
}

export default App;
