import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/" component={Homepage}/>
    </div>
  );
}

export default App;
