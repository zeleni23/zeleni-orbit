import './App.css';
import Zaglavlje from './components/Zaglavlje';
import GlavniSadrzaj from './components/GlavniSadrzaj';
import Strana from './components/Strana';
import Podnozje from './components/Podnozje';

  function App() {
  return (
    <div className="App">
      <Zaglavlje />
      <Strana />
      <GlavniSadrzaj />
      <Podnozje />
    </div>
  );
}
export default App;