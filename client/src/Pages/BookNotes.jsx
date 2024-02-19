import Books from "../components/Books";
import Calendar from "../components/Calendar";
import  "../styles/mediatate.css";
const BookNotes = () => {
  return (
    <>
    <div className="app-container">
      <div className="left-side">
        <Books/>
      </div>
      <div className="right-side">
        <Calendar />
      </div>
    </div>
    </>
  );
}
export default  BookNotes;