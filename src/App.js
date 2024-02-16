import './App.css';
import Main from './Main';
import Core from './Core';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
//import NotFound

function App() {
  
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/core" element={<Core />}></Route>
          {/* { <Route path="*" element={<NotFound />}></Route> } */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
