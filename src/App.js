import Navbar from "./layout/main_navbar";
import { route } from "./layout/routeConfig";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {route.map(({id,...rest})=>(
          <Route key={id} {...rest} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
