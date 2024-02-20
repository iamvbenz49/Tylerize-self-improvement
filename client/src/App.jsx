import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Meditate from "./Pages/Meditate";
import Todo from "./Pages/Todo";
import Workout from "./Pages/Workout";
import BookNotes from "./Pages/BookNotes"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meditation" element={<Meditate />} />
      <Route path="/workouts" element={<Workout />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/books" element={<BookNotes />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
