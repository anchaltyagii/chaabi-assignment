import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Containers/Dashboard/index";
import Trainings from "./Containers/Trainings/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trainings" element={<Trainings />} />
      </Routes>
    </>
  );
}

export default App;
