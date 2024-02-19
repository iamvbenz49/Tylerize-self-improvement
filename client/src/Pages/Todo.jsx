import TodoList from "../components/TodoList";
import Calendar from "../components/Calendar";
import "../styles/mediatate.css";

const Todo = () => {
  return (
    <>
    <div className="app-container">
      <div className="left-side">
        <TodoList/>
      </div>
      <div className="right-side">
        <Calendar />
      </div>
    </div>
    </>
  );
}

export default Todo;