import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from "./Components/Homepage/Homepage";
import TechStack from './Components/TechStack/TechStack';
//Portfolo website..

//1. NavBar..
//2. HomePage..
//3. Tech Stack..
//4. Experience..
//5. Projects..



function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      <TechStack />
    </div>
  );
}

export default App;
