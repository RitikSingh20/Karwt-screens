import logo from './logo.svg';
import './App.css';

import Policy from './components/Policy';
import Trackorders from './components/Trackorders'
import { Errorpage } from './components/Errorpage';
import { Faqpage } from './components/Faqpage';
import {Blog } from './components/Blog'
import { Categories } from './components/Categories';
import { Blogdetails } from './components/Blogdetails';
import {Home } from './components/Home';
 

function App() {
  return (
     <div>
        {/* <Policy/>
       <Trackorders /> 
       <Errorpage/> */}
       {/* <Faqpage />  */}
       {/* <Blog /> */}
       {/* <Categories /> */}
       {/* <Blogdetails />
       <Blog /> */}
       <Home />
     </div>
  );
}

export default App;
