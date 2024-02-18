import "../styles/mediatate.css";
import Calendar from "../components/Calendar";
import StopwatchApp from "../components/StopWatchApp";

const Meditate = () => {
  return (
    <>
    <div className="app-container">
      <div className="left-side">
        <StopwatchApp/>
      </div>
      <div className="right-side">
        <Calendar />
      </div>
    </div>
    </>
  );
}

export default Meditate;
