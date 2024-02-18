import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Meditate from "./Pages/Meditate";
import Todo from "./Pages/Todo";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meditation" element={<Meditate />} />
      <Route path="/workouts" element={<Meditate />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/books" element={<Meditate />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
