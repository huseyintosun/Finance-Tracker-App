import './App.css';
import AppBarComp from './components/AppBar';
import FormComponent from './components/form/Form '
import TotalAmount from './components/total/TotalAmount';

function App() {
  return (
      <div className="App">
        <AppBarComp/>
        <FormComponent />
        <TotalAmount/>
      </div>
  );
}

export default App;
