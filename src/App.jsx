import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
