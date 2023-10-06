// import './App.css';

// function App() {
//   return (
//      <div className="App">
//       <header className="App-header">      
//         <p>
//           Edit <code>src/App.js</code> and save to reload12.
//         </p>
       
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
 
function App(){
 
        return (
            <div>
                <Navbar/>
                <div className="container-fluid" id="main">
                 <div className="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App