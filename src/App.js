import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dividir from './pages/divisao';
import Multiplicar from './pages/multiplicar';
import Somar from './pages/somar';
import Subtrair from './pages/subtrair';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Somar}/>
      <Route path="/subtrair" component={Subtrair}/>
      <Route path="/dividir" component={Dividir}/>
      <Route path="/multiplicar" component={Multiplicar}/>
    </Router>
  );
}

export default App;
