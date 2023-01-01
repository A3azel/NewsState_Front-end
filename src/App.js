import './App.css';
import Login from "./components/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/registration";
import Header_version_1 from "./oldComponentVersion/header_version_1";
import NewsPage from "./components/newsPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/login'} element={<Login/>}/>
          </Routes>
          <Routes>
              <Route path={'/registration'} element={<Registration/>}/>
          </Routes>
          <Routes>
              <Route path={'/header'} element={<Header_version_1/>}/>
          </Routes>
          <Routes>
              <Route path={'/news'} element={<NewsPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
