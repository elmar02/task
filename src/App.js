import { Route, Routes } from "react-router-dom";
import { routes } from "./libs/routes";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        {
          routes.map((route, index)=>(
            <Route key={index} path={route.path} Component={route.component} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
