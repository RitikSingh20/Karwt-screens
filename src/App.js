import logo from './logo.svg';
import './App.css';

import Policy from './components/Policy';
import Trackorders from './components/Trackorders'
import { Errorpage } from './components/Errorpage';
import { Faqpage } from './components/Faqpage';


function App() {
  return (
     <div>
       {/* <Policy/>
       <Trackorders /> */}
       <Errorpage/>
       <Faqpage />
     </div>
  );
}

export default App;
