import './App.css';
import Landing from './component/Landing';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Upload from './component/Upload';
import Postview from './component/postview';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/upload' element={<Upload/>}/>
            <Route path='/postview' element={<Postview/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
