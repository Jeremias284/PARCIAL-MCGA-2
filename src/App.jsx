import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routers/Routes';
import {getPatients} from './Redux/Actions/patientActions';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';


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
  );
}



export default App;