import './App.css';
import Header from './Header';
import Login from "./Login";
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useStateValue } from './StateProvider';
// import {BrowserRouter as Router,Route,Switch}from "react-router-dom";




function App() {
  
  const [{ user },dispatch ] = useStateValue();
  return (
   
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <div>
              <Header />
             
           <div className="app__body">
                   <Sidebar /> 
                   <Feed />
           </div>
        </div>
        
      )}
        
      
       
          
    </div>
    
  );
}

export default App;
