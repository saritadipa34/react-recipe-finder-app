
import {  BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Sidebar from "./components/SideBar";
 

const App=()=>{
  return(
    <div className="flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App; 