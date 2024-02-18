import Cards from "../components/Cards";
import "../styles/home.css"

const Home = () => {
    const data = [
        { title: "Mediation", linkTo:"meditation"},
        { title: "Workouts", linkTo:"workouts"},
        { title: "To Do", linkTo:"todo"},
        { title: "Books", linkTo:"books"}
    ]
    return (
        <div className="box">
            {data.map((item, index) => (
                <Cards key={index} title={item.title} linkTo={item.linkTo} />
            ))}
        </div>
    );
}

export default Home;