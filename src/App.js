import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

   return (
      <div className="App">
         <header className="App-header pb-5">
            <img src={logo} className="App-logo" alt="logo" />
            <Home></Home>
         </header>
      </div >
   );
}

export default App;
