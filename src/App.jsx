import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routers/Routes';
import { useDispatch } from 'react-redux';
import { getPatients } from './Redux/Actions/patientActions';
import React, { useEffect } from 'react';

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes />
//       </Router>
//     </div>
//   );
// }

// export default App;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatients());
    return () => {};
  }, []);
   return (
     <div>
         <Router>
           <Routes />
         </Router>
       </div>
      )}; 

export default App;