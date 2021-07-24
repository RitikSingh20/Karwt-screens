import logo from './logo.svg';
import './App.css';

import Policy from './components/Policy';
import Trackorders from './components/Trackorders'
import { Errorpage } from './components/Errorpage';


function App() {
  return (
     <div>
       {/* <Policy/>
       <Trackorders /> */}
       <Errorpage/>
     </div>
  );
}

export default App;
