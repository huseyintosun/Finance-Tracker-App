import logo from './logo.svg';
import './App.css';
import SelectTextFields from './utils/Select';
import { Provider } from 'react-redux';
import AppBarComp from './components/AppBar';

function App() {
  return (
      <div className="App">
        <AppBarComp/>
        <SelectTextFields />
      </div>
  );
}

export default App;
