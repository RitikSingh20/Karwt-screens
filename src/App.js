import logo from './logo.svg';
import './App.css';

import Policy from './components/Policy';
import Trackorders from './components/Trackorders'
import { Errorpage } from './components/Errorpage';
import { Faqpage } from './components/Faqpage';
import {Blog } from './components/Blog'
import { Categories } from './components/Categories';
 

function App() {
  return (
     <div>
        {/* <Policy/>
       <Trackorders /> 
       <Errorpage/> */}
       <Faqpage /> 
       {/* <Blog /> */}
       <Categories />
     </div>
  );
}

export default App;
