import WorkOut from "../components/WorkOut";
import Calendar from "../components/Calendar";
import  "../styles/mediatate.css";

const Workout = () => {
  return (
    <>
    <div className="app-container">
      <div className="left-side">
        <WorkOut/>
      </div>
      <div className="right-side">
        <Calendar />
      </div>
    </div>
    </>
  );
}

export default Workout;