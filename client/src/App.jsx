import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ViewStudent from './pages/ViewStudent';
import CreateStudent from './pages/action/CreateStudent';
import UpdateStudent from './pages/action/UpdateStudent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ViewStudent />} />
        <Route path='/create' element={<CreateStudent />} />
        <Route path='/update/:id' element={<UpdateStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
